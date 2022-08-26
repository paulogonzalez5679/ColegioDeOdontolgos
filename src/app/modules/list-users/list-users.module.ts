import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [{ path: "", component:  ListUsersComponent}];

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListUsersModule { }
