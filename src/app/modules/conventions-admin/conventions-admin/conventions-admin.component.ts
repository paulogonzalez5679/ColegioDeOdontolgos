import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Convention, ConventionImage } from 'app/interfaces/conventions';
import { ConventionsService } from 'app/services/conventions/conventions.service';
import { AddConventionsComponent } from '../add-conventions/add-conventions.component';
import { EditConventionsComponent } from '../edit-conventions/edit-conventions.component';

@Component({
  selector: 'app-conventions-admin',
  templateUrl: './conventions-admin.component.html',
  styleUrls: ['./conventions-admin.component.css']
})
export class ConventionsAdminComponent implements OnInit {

  name: string;
  list_cards=[];
  listaObj: ConventionImage[] = [];

  constructor(public dialog: MatDialog, private readonly conventionsService: ConventionsService) {
  }

  ngOnInit(): void {
      this.conventionsService.getConventions().subscribe(events => {
          // console.log(events);
          this.list_cards = events;
      });
  }

  addConvention(): void {
    const dialogRef = this.dialog.open(AddConventionsComponent, {
      width: '550px',
      height: '500px'
    });
  }

  editConvention(convention:Convention): void {
    const dialogRef = this.dialog.open(EditConventionsComponent, {
      width: '550px',
      height: '500px',
      data: convention,
    });
  }



  deleteImage(conventionImage) {
    conventionImage.forEach(async element => {
      await this.conventionsService.deleteImageById(element.id);
    });

  }

  deleteConvention(convention) {
      this.deleteImage(convention.image);
      this.conventionsService.deleteConvention(convention.id);
  }

}
