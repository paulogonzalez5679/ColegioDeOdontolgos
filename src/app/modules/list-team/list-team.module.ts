import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTeamComponent } from './list-team/list-team.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ListTeamComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatCardModule,
  ],
  exports: [ListTeamComponent]
})
export class ListTeamModule { }
