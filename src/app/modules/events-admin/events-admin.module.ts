import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [{ path: "", component:  EventsAdminComponent}];
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditEventComponent } from './edit-event/edit-event.component';


@NgModule({
  declarations: [EventsAdminComponent, DialogOverviewComponent, EditEventComponent],
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
export class EventsAdminModule { 
  
}
