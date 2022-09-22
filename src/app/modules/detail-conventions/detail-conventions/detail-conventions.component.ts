import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Convention } from 'app/interfaces/conventions';
import { ListConventionsComponent } from 'app/modules/list-conventions/list-conventions/list-conventions.component';

@Component({
  selector: 'app-detail-conventions',
  templateUrl: './detail-conventions.component.html',
  styleUrls: ['./detail-conventions.component.css']
})
export class DetailConventionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListConventionsComponent>,
    @Inject(MAT_DIALOG_DATA) public convention: Convention) { }

  ngOnInit(): void {
  }

}
