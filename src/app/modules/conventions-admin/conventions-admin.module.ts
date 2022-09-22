import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConventionsAdminComponent } from './conventions-admin/conventions-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import { EditConventionsComponent } from './edit-conventions/edit-conventions.component';
import { AddConventionsComponent } from './add-conventions/add-conventions.component';
const routes: Routes = [{ path: "", component:  ConventionsAdminComponent}];


@NgModule({
  declarations: [ConventionsAdminComponent, EditConventionsComponent, AddConventionsComponent],
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
export class ConventionsAdminModule { }
