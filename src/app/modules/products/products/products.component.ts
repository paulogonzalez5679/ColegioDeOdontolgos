import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import * as firebase from "firebase/app";
import { ProductService } from "../../../services/product/product.service";


declare var $: any;
export interface DataTable {
  headerRow: string[];
  footerRow?: string[];
  dataRows: string[][];
}
@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  public dataTable: DataTable;
  public product: Product;
  public category: Category;
  public arrayproduct: Product[];
  public arrayCategory: Category[];
  public documentId = null;
  public isEdit = false;
  public tablaDatos;
  public imageFile: any;
  public imageSrc: any;
  public disabled: boolean = false;
  public cont = 0;
  public cont2 = 0;
  public stateSw = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product = {};
    this.dataTable = {
      headerRow: [
        "#",
        "ID",
        "Nombre",
        "Categoría",
        "Descripción",
        "Stock",
        "Precio",
        "Imagen",
        "Editar",
        "Eliminar",
      ],
      dataRows: [],
    };
    this.tablaDatos = $("#datatablesProduct").DataTable({});
    this.getProducts();
    this.getCategory();
  }

  onChange (e) {}

  /**
   * EVENTO CARGA DE IMAGEN.
   * @param event.
   */
  public onChangeImage(event) {
    const files = event.srcElement.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
    this.upload(event);
  }

  /**
   * *** Recibimos el archivo y lo enviamos a subir al storage ***
   * @param event
   */
  public upload(event): void {
    const file = event.target.files[0];
    this.imageFile = file;
    this.uploadDocumentToStorage();
  }

  /**
   * Optenemos el id de la nueva categoria
   */
  newProduct() {
    this.cont;
    this.isEdit = false;
    var id = new Date().getTime();
    this.product = {
      pro_id: id.toString(),
      pro_description: "",
      pro_categoria: "",
      pro_stock: '',
      pro_nombre: "",
      pro_precio: null,
      pro_url: "",
    };
  }

  /**
   * para agregar categorias
   * @param product
   * @param valid
   */

  addProduct(product: Product, valid: boolean) {
    if (valid) {
      this.productService.createProduct(product).then(() => {
        swal("OK", "Registro Exitoso", "success");
        this.product = {};
        $("#modalProduct").modal("hide");
      });
    }
  }

  /**
   * *** Obtenemos todos los productos de la DB ***
   */
  async getProducts() {
    await this.productService.getProducts().subscribe((prductSnapshot) => {
      this.arrayproduct = [];
      prductSnapshot.forEach((categoryData) => {
        this.arrayproduct.push(categoryData.payload.doc.data());
        if (prductSnapshot.length == this.arrayproduct.length) {
          this.initDataTable();
        }
      });
    });
  }

  async getCategory() {
    await this.productService.getCategories().subscribe((categorySnapshot) => {
      this.arrayCategory = [];
      categorySnapshot.forEach((categoryData) => {
        this.arrayCategory.push(categoryData.payload.doc.data());
        if (categorySnapshot.length == this.arrayCategory.length) {
        }
      });
    });
  }

  selectCategories(e) {
    this.category = this.arrayCategory[e.target.value];
  }

  /**
   * *** Seleccionamos una categoria para la edicion ***
   * @param category
   */
  selectCategory(product: Product) {
    this.isEdit = true;
    this.product = product;
    this.estadoNuevo('e');
  }

  /**
   *
   * @param id
   */
  public editProduct(id) {
    let editSubscribe = this.productService
      .getProduct(id)
      .subscribe((categoria) => {
        editSubscribe.unsubscribe();
      });
  }

  public deleteProduct(id) {
    this.productService.deleteProduct(id).then(
      () => {},
      (error) => {
        console.error(error);
      }
    );
  }

  initDataTable() {
    let aaa = this.tablaDatos;
    $("#datatablesProduct").DataTable().destroy();
    setTimeout(function () {
      /*
       * Opciones del datatable
       */
      aaa = $("#datatablesProduct").DataTable({
        paging: true,
        ordering: true,
        info: true,
        pagingType: "full_numbers",
        lengthMenu: [
          [10, 25, 50, -1],
          [10, 25, 50, "All"],
        ],
        responsive: true,
        language: {
          search: "",
          searchPlaceholder: "Buscar",
        },
      });
    }, 10);
  }

  uploadDocumentToStorage() {
    // let serviceGlobal = this.registerService;
    let categoryLocal = this.product;
    var storageService = firebase.storage();
    var refStorage = storageService.ref("/product").child(this.product.pro_id);
    var uploadTask = refStorage.put(this.imageFile);
    uploadTask.on(
      "state_changed",
      null,
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          categoryLocal.pro_url = downloadURL;
          swal({
            title: "Muy bien",
            text: "Información adicional guardada correctamente",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-fill btn-success",
            type: "success",
          }).catch(swal.noop);
        });
      }
    );
  }

  estadoNuevo(e) {
    var cont = 0;
    var productAux = this.product;

    this.arrayproduct.forEach((element) => {
      if (this.product.pro_categoria == element.pro_categoria) {
      }
    });
    this.cont = cont;

    if (cont > 3) {
      swal(
        "Error",
        "NO SE PUEDE AGREGAR MAS PRODUCTOS NUEVOS EN LA CATEGORÍA: " + this.product.pro_categoria,
        "error"
      );
      $('#modalProduct').modal('hide');
      this.product = {};
    } else {
      if (this.product.pro_nombre != '') {
        this.productService.updateProductState(this.product);
      }
    }
  }

  estadoLoMasVendido(e) {
    var cont2 = 0;
    var productAux2 = this.product;
    this.arrayproduct.forEach((element) => {
    });
    this.cont2 = cont2;
  
    if (cont2 > 3) {
      swal(
        "Error",
        "NO SE PUEDE AGREGAR MAS PRODUCTOS NUEVOS EN LA CATEGORÍA: " + this.product.pro_categoria,
        "error"
      );
      $('#modalProduct').modal('hide');
      this.product = {};
    } else {
      if (this.product.pro_nombre != '') {
        this.productService.updateProductState(this.product);
      }
    }
  }

  
}
