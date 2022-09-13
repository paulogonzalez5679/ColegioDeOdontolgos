import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IndexComponent } from 'app/index/index.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-init-promo',
  templateUrl: './init-promo.component.html',
  styleUrls: ['./init-promo.component.css']
})
export class InitPromoComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<IndexComponent>) { }

  ngOnInit(): void {
  }

  redirigir(){
    this.router.navigate([``], { queryParams: {registro: true} });
    this.dialogRef.close();
  }

}
