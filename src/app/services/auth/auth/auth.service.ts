import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "firebase";
import { first } from "rxjs/operators";
import swal from "sweetalert2";
import {Router} from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
declare var $:any;

@Injectable()
export class AuthService {
  public user: User;

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private fb: AngularFirestore
    ) {}

// async getUserByEmail (email: string) {
//   return this.fb.collection('users_collection').doc(email).valueChanges();
// }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      $("#modalLogin").modal("hide");
      this.router.navigate(['/admin/events']);
      // console.log("Accedio");

      
    } catch (error) {
      if (error.code == "auth/wrong-password") {
        swal(
          "Atención",
          "La contraseña no es válida o el usuario no tiene una contraseña",
          "error"
        );
      }
      if (error.code == "auth/user-not-found") {
        swal(
          "Atención",
          "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado",
          "error"
        );
        // this.utilitiesService.showMessage('top', 'right', 4, "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado");
      }
      if (error.code == "auth/invalid-email") {
        swal("Atención", "El email no tiene un formato válido.", "error");

        // this.utilitiesService.showMessage('top', 'right', 4, "Demasiados intentos de inicio de sesión fallidos.");
      }
      if (error.code == "auth/too-many-requests") {
        swal(
          "Atención",
          "Demasiados intentos de inicio de sesión fallidos.",
          "error"
        );
      }
    }
  }
  
  async register(email: string, password: string) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((ok) => {
          swal("OK", "Registro Exitoso", "success");
          this.router.navigate(['/index']);
          return ok.user;
        })
        .catch((error) => {
          if (error.code == "auth/user-not-found") {
            swal(
              "Atención",
              "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado",
              "error"
            );
          }

          if (error.code == "auth/email-already-in-use") {
            swal("Atención", "El email ingresado ya está en uso", "error");
          }

          if (error.code == "auth/wrong-password") {
            swal(
              "Atención",
              "La contraseña no es válida o el usuario no tiene una contraseña",
              "error"
            );
          }

          if (error.code == "auth/too-many-requests") {
            swal(
              "Atención",
              "Demasiados intentos de inicio de sesión fallidos.",
              "error"
            );
          }
          if (error.code == "auth/invalid-email") {
            swal("Atención", "El email no tiene un formato válido.", "error");
          }
        });
      return result;
    } catch (error) {
      if (error.code == "auth/user-not-found") {
        swal(
          "Atención",
          "No hay registro de usuario correspondiente a este email. El usuario puede haber sido eliminado",
          "error"
        );
      }

      if (error.code == "auth/email-already-in-use") {
        swal("Atención", "El email ingresado ya está en uso", "error");
      }
      if (error.code == "auth/wrong-password") {
        swal(
          "Atención",
          "La contraseña no es válida o el usuario no tiene una contraseña",
          "error"
        );
      }
      if (error.code == "auth/too-many-requests") {
        swal(
          "Atención",
          "Demasiados intentos de inicio de sesión fallidos.",
          "error"
        );
      }
      if (error.code == "auth/invalid-email") {
        swal("Atención", "El email no tiene un formato válido.", "error");
      }
      return error;
    }
  }

  async logout(){
    await this.afAuth.signOut();
    this.router.navigate([''])
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first());
  }
  
}

