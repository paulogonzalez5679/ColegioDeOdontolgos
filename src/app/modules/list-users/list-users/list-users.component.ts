import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user/user.service';
import * as XLSX from 'xlsx';

export interface DataTable {
  headerRow: string[];
  footerRow?: string[];
  dataRows: string[][];
}

declare var $: any;

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public dataTable: DataTable;
  public arrayUsers: Array<User> = [];
  public tablaDatos;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dataTable = {
      headerRow: [
        "#",
        "NOMBRE",
        "APELLIDO",
        "CEDULA",
        "EMAIL",
        "TELEFONO",
        "DIRECCION",
        "ROL",
        "PAGO"
      ],
      dataRows: [],
    };

    this.getUser();
  }

  public getUser() {
    this.userService.getUsers().subscribe(m => {
      // console.log(m);
      this.arrayUsers = m;
    })

    this.initDataTable()
  }

  public initDataTable() {
    let aaa = this.tablaDatos;
    $("#datatablesUsers").DataTable().destroy();
    setTimeout(function () {
      aaa = $("#datatablesUsers").DataTable({
        retrieve: true,
        paging: true,
        ordering: true,
        info: true,
        pagingType: "full_numbers",
        lengthMenu: [
          [10, 25, 50, -1],
          [10, 25, 50, "All"],
        ],
        // responsive: true,
        language: {
          search: "Buscar:",
          searchPlaceholder: "Buscar",
        },
      });
    }, 10);
  }

  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('datatablesUsers');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}
