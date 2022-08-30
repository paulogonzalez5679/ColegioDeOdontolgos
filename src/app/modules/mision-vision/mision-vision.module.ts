import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MisionVisionComponent } from './mision-vision/mision-vision.component';
const routes: Routes = [{ path: "", component:  MisionVisionComponent}];

@NgModule({
  declarations: [MisionVisionComponent],
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
export class MisionVisionModule { }
