import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";

export const AppRoutes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "", component: IndexComponent },
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
        path: 'team',
        loadChildren: './modules/team/team.module#TeamModule',
      },
      {
        path: 'sponsors',
        loadChildren: './modules/sponsors/sponsors.module#SponsorsModule',
      },
      {
        path: 'carrusel',
        loadChildren: './modules/admin-carrusel/admin-carrusel.module#AdminCarruselModule',
      },
      {
        path: 'mision-vision',
        loadChildren: './modules/mision-vision/mision-vision.module#MisionVisionModule',
      },
      {
        path: 'conventions',
        loadChildren: './modules/conventions-admin/conventions-admin.module#ConventionsAdminModule',
      },
    ],
  },
];
