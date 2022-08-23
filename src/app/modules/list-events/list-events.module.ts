import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEventsComponent } from './list-events/list-events.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ListEventsComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
  ],
  exports: [ListEventsComponent]

})
export class ListEventsModule { }
