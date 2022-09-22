import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConventionsComponent } from './list-conventions/list-conventions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ListConventionsComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
  ],
  exports: [ListConventionsComponent]
})
export class ListConventionsModule { }
