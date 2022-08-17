import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";

export const AppRoutes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "", component: IndexComponent },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "categories",
        loadChildren: "./modules/categories/categories.module#CategoriesModule",
      },
      {
        path: "products",
        loadChildren: "./modules/products/products.module#ProductsModule",
      },
      {
        path: "message",
        loadChildren: "./modules/message/message.module#MessageModule",
      },
    ],
  },
];
