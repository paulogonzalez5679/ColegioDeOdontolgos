import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { AddSponsorComponent } from './add-sponsor/add-sponsor.component';
import { EditSponsorComponent } from './edit-sponsor/edit-sponsor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: "", component:  SponsorsComponent}];


@NgModule({
  declarations: [SponsorsComponent, AddSponsorComponent, EditSponsorComponent],
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

export class SponsorsModule { }
