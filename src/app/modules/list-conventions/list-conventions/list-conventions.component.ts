import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailConventionsComponent } from 'app/modules/detail-conventions/detail-conventions/detail-conventions.component';
import { ConventionsService } from 'app/services/conventions/conventions.service';

@Component({
  selector: 'app-list-conventions',
  templateUrl: './list-conventions.component.html',
  styleUrls: ['./list-conventions.component.css']
})
export class ListConventionsComponent implements OnInit {

  conventions: any;
  constructor(private readonly conventionsService: ConventionsService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.conventions = this.conventionsService.getConventions();
    console.log(this.conventions);
  }

  viewConvention(component:Component): void {
    this.dialog.open(DetailConventionsComponent, {
      width: '700px',
      height: '700px',
      data: component,
      panelClass: 'events-class'
    });
  }

}
