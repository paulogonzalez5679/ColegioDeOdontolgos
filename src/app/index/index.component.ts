import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Directive,
} from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from "@angular/common";
import { ProductService } from "../services/product/product.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import swal from "sweetalert2";
import { AuthService } from "app/services/auth/auth/auth.service";
import { CategoriesService } from "app/services/categories/categories.service";
import { DatesService } from "app/services/dates/dates.service";
import { MessageService } from "app/services/message/message.service";

declare var $: any;

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  public islogging: boolean = true;
  public arrayProduct: Product[];
  public arrayProductCart: Product[];
  public arrayProductAux: Product[];
  productos: Observable<any[]>;
  public showCart = false;
  public showCart2 = false;
  public showCart3 = false;
  public showCart4 = false;
  public show: string = "todos";
  private toggleButton;
  private sidebarVisible: boolean;
  public seachText = "";
  public product: Product;
  public message;
  public arrayCategories: Category[];
  
  //METODOS DEL COLEGIO DE ODONTOLOGOS

  mision: Observable<any[]>;
  vision: Observable<any[]>;

  constructor(
    private router: Router,
    location: Location,
    private renderer: Renderer2,
    private element: ElementRef,
    private ProductService: ProductService,
    private categoryService: CategoriesService,
    private authService: AuthService,
    private datesService: DatesService,
    private messageService: MessageService,
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.arrayProductCart = [];
    this.message = {};
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    this.product = {};
    
    //COLEGIO DE ODONTOLOGOS
    this.getMision();
  }
  selectProdcut(product: Product) {
    this.product = product;
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.arrayCategories = categories;
    });
  }

  async getProducts() {
    await this.ProductService.getProducts().subscribe((productSnapshot) => {
      this.arrayProduct = [];
      this.arrayProductAux = [];

      productSnapshot.forEach((categoryData) => {
        this.arrayProduct.push(categoryData.payload.doc.data());
        this.arrayProductAux.push(categoryData.payload.doc.data());
      });
      this.islogging = false;
    });
  }

  trackByFn(index, obj) {
    return obj.uid;
  }
  carrito(id: any) {
    this.router.navigate([`carrito`]);
  }
  cambioMasvendido(opt) {
    this.show = opt;
    $("html, body").animate(
      {
        scrollTop: $("#card-product").offset().top,
      },
      400,
      function () {}
    );
  }

  isLink(str) {
    if (str != undefined) {
      str = str.substr(0,5);
      if (str == 'https') {
        return true;
      } else {
        return false;
      }
    }
  }

  sidebarOpen() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName("body")[0];
    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);
    body.classList.add("nav-open");
    this.sidebarVisible = true;
  }

  sidebarClose() {
    var body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
  }
  sidebarToggle() {
    if (this.sidebarVisible == false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  rutaproducts() {
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(["/pages/list-prod"]);
    window.scroll(0, 0);
  }

  searchProduct() {
    this.arrayProduct = [];
    this.arrayProductAux.forEach((e) => {
      if (e.pro_nombre.toUpperCase().includes(this.seachText.toUpperCase())) {
        this.arrayProduct.push(e);
      }
    });
  }

  public viewRouter(opt: string, time: number) {
    var body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
    setTimeout(function () {
      $("html, body").animate(
        {
          scrollTop: $(opt).position().top,
        },
        time,
        function () {}
      );
    }, 500);
  }

   /**
   * *** Funcion para almacenar los mensajes del usuario ***
   * *** Se obtine la información del formulario de contacto ***
   * @param message
   * @param valid
   */
  onSaveMessage(message: Message, valid: boolean) {
    message.message_date = this.datesService.getDateCurrent();
    message.message_id = new Date().getTime().toString();
    message.message_time = this.datesService.getTimeCurrent();
    message.message_state = false;
    if (valid) {
      this.messageService.createMessage(message).then(() => {
        swal("OK", "Mensaje enviado correctamente", "success");
        this.message = {};
      });
    }
  }


  alert () {
    swal({
      title: "Deleted!",
      text: "Your row has been deleted.",
      type: "success",
      timer: 3000
      });
      // function () {
      //        location.reload(true);
      //        tr.hide();
      // });
  }

  /**
   * *** Limpiamos el formulario ***
   */
  onCancelMessage() {
    this.message = {};
  }

  //COLEGIO DE ODONTOLOGOS METODOS
  getMision()
  {
    this.mision = this.ProductService.getMision();
  }

  getVision()
  {
    this.vision= this.ProductService.getVision();
  }
}
