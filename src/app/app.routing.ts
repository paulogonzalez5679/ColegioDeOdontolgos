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
        path: 'events-custom',
        loadChildren: './modules/events/events.module#EventsModule',
      },
    ],
  },
];
