import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "app/services/auth/auth/auth.service";
import { Observable } from "rxjs";
import { ProductService } from '../../services/product/product.service';
declare var $: any;

declare interface UserLogin {
  email?: string;
  password?: string;
}

@Component({
  selector: "app-modal-login",
  templateUrl: "./modal-login.component.html",
  styleUrls: ["./modal-login.component.css"],
})
export class ModalLoginComponent implements OnInit {
  @ViewChild("modalLogin") modalLogin: ElementRef;

  public userLogin: UserLogin;
  public islogging: boolean = true;
  public arrayProduct: Product[];
  public arrayProductCart: Product[];
  public arrayProductAux: Product[];
  productos: Observable<any[]>;

  public product: Product

  array = [];
  loginForm = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
    ]),
    password: new FormControl("", Validators.required),
  });
  test: Date = new Date();
  loginService: any;

  constructor(private authservice: AuthService,private ProductService: ProductService) {}

  ngOnInit() {
    this.userLogin = {};
    this.getProducts();
    this.arrayProductCart= [];
    this.product = {}
  }

  
  async getProducts() {
    await this.ProductService.getProducts().subscribe((productSnapshot) => {
      this.arrayProduct = [];
      this.arrayProductAux = [];
      productSnapshot.forEach((categoryData) => {
        this.arrayProduct.push(categoryData.payload.doc.data());
        this.arrayProductAux.push(categoryData.payload.doc.data());
      });
      this.islogging = false;
    });
  }
  trackByFn(index, obj)
  {
    return obj.uid;
  }

  /**
   * *** Manejo del modal login       ***
   * *** seteamos la variable a false ***
   * *** para ocultar el cargando     ***
   */
  ngAfterViewInit() {
    $(this.modalLogin.nativeElement).on("hidden.bs.modal", () => {
      this.islogging = false;
    });
  }

  /**
   * *** Funcion para loguear al usuario           ***
   * *** validamos el formulario si es valido      ***
   * *** llamamos el servicio login en authSevice  ***
   * @param userLogin
   * @param valid
   */
  async onLogin(userLogin: UserLogin, valid: boolean) {
    if (valid) {
      if (userLogin) {
        this.islogging = true;
        this.authservice.login(userLogin.email, userLogin.password);
      }
    }
  }
}
