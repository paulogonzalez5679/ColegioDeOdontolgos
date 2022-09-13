import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
} from "@angular/core";
import { AuthService } from "app/services/auth/auth/auth.service";
import {Router} from '@angular/router';

declare var $: any;
//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

export const ROUTES: RouteInfo[] = [
  // {
  //   path: "/categories",
  //   title: "Categorias",
  //   type: "link",
  //   icontype: "pe-7s-home",
  // },
  // {
  //   path: '/events-custom',
  //   title: 'Eventosss',
  //   type: 'link',
  //   icontype: 'pe-7s-mail',
  // },
  {
    path: "/events",
    title: "Eventos",
    type: "link",
    icontype: "pe-7s-culture",
  },
  {
    path: "/carrusel",
    title: "Carrusel",
    type: "link",
    icontype: "pe-7s-photo-gallery",
  },
  {
    path: "/users",
    title: "Usuarios Registrados",
    type: "link",
    icontype: "pe-7s-users",
  },
  {
    path: "/team",
    title: "Equipo",
    type: "link",
    icontype: "pe-7s-id",
  },
  {
    path: "/sponsors",
    title: "Sponsors",
    type: "link",
    icontype: "pe-7s-display1",
  },
  {
    path: "/message",
    title: "Mensajes",
    type: "link",
    icontype: "pe-7s-mail",
  },
  {
    path: "/mision-vision",
    title: "Mision y Vision",
    type: "link",
    icontype: "pe-7s-pin",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent {
  public menuItems: any[];
  infoUser: any;

  constructor(public authSvc: AuthService, private router: Router) {}

  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    var $sidebar = $(".sidebar-wrapper");
    var $bgLogo = $(".bgLogo");
    $sidebar.css("background-color", "#000000");
    $bgLogo.css("background-color", "#000000");

    this.menuItems = ROUTES.filter((menuItem) => menuItem);

    var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

    isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
    var $sidebar = $(".sidebar");
    $sidebar.css("background-color", "green");

    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();
      $("html").addClass("perfect-scrollbar-on");
    } else {
      $("html").addClass("perfect-scrollbar-off");
    }
  }
  
  ngAfterViewInit() {
    var $sidebarParent = $(".sidebar .nav > li.active .collapse li.active > a")
      .parent()
      .parent()
      .parent();

    var collapseId = $sidebarParent.siblings("a").attr("href");

    $(collapseId).collapse("show");
  }
  async logout() {
    await this.authSvc.logout();
  }

  redirect(route: string) {
      this.router.navigate([`/admin/${route}`]);
  }
  
}

