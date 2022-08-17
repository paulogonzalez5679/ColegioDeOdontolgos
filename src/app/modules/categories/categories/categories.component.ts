import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories/categories.service'
import swal from 'sweetalert2';

declare var $: any;
export interface DataTable {
  headerRow: string[];
  footerRow?: string[];
  dataRows: string[][];
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public dataTable: DataTable;
  public tablaDatos;
  public category: Category;
  public isEdit = false;
  public arrayCategories: Category[];
  constructor(private categoryService: CategoriesService ) { }

  ngOnInit(): void {
    this.category = {}
    this.dataTable = {
      headerRow: [
        "#",
        "ID",
        "Nombre",
        "Editar",
        "Eliminar",
      ],
      dataRows: [],
    };
    this.getCategories()
  }

    /**
   * Optenemos el id de la nueva categoria
   */
  public newCategory() {
    this.isEdit = false;
    // optenemos una marca de tiempo timeStamp
    var id = new Date().getTime();
    this.category = {
      id_category: id.toString(),
      nombre: "",
    };
    this.getCategories()
  }

  public addCategory(formValue: Category, formValid: boolean) {
    if (formValid) {
      this.categoryService.saveCategories(formValue).then(() => {
          swal("OK", "Registro Exitoso", "success");
          this.category = {};
          $("#modalProduct").modal("hide");
         });
    }

  }

  public getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.arrayCategories = categories;
    })
  }

  public selectCategory(category: Category) {
    this.isEdit = true;
    this.category = category;
    this.categoryService.updateCategory(category)
  }

  public deleteCategory(category_id: string) {
    swal({
      title: 'Alerta',
      text: '¿Esta seguro que desea eliminar la categoría?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      confirmButtonText: 'Sí, eliminar!',
      buttonsStyling: false,
    }).then((result) => {
      if (result.value) {
        this.categoryService.deleteCategory(category_id)
      }
    })



  }

}
