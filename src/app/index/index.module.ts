import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IndexComponent } from './index.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { DetailEventComponent } from 'app/modules/detail-event/detail-event/detail-event.component';


const routes: Routes = [{ path: "", component: IndexComponent }];

@NgModule({
  
  declarations: [IndexModule, DetailEventComponent, ModalLoginComponent],

  imports: [
    CommonModule,
    MatSliderModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    // ModalLoginComponent,
    // CarritoComponent

  ]
  
  
})
export class IndexModule { }
