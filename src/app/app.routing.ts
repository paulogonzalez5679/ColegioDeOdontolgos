import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { UserRegistrationComponent } from "./modules/user-registration/user-registration/user-registration.component";

export const AppRoutes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "", component: IndexComponent },
  { path: "registration", component: UserRegistrationComponent },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "categories",
        loadChildren: "./modules/categories/categories.module#CategoriesModule",
      },
      {
        path: "events",
        loadChildren: "./modules/events-admin/events-admin.module#EventsAdminModule",
      },
      {
        path: "message",
        loadChildren: "./modules/message/message.module#MessageModule",
      },
      {
        path: 'users',
        loadChildren: './modules/list-users/list-users.module#ListUsersModule',
      },
      {
        path: 'carrusel',
        loadChildren: './modules/admin-carrusel/admin-carrusel.module#AdminCarruselModule',
      },
      {
        path: 'mision-vision',
        loadChildren: './modules/mision-vision/mision-vision.module#MisionVisionModule',
      },
    ],
  },
];
