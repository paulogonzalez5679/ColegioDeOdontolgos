import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCarruselComponent } from './admin-carrusel/admin-carrusel.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [{ path: "", component:  AdminCarruselComponent}];

@NgModule({
  declarations: [AdminCarruselComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminCarruselModule { }
