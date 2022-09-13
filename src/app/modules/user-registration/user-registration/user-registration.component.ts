import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'app/services/user/user.service';
import swal from 'sweetalert2';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public user: User;
  public validador=true; 
  seleccionado=false;
  selected='';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = {
      user_id: '',
      user_name: '',
      user_lastname: '',
      user_ci: '',
      user_direction:'',
      user_email: '',
      user_phone: ''
    };
  }

   /**
   * *** Funcion para almacenar los mensajes del usuario ***
   * *** Se obtine la información del formulario de contacto ***
   * @param user
   * @param valid
   */
  onSaveUser(user: User, valid: boolean) {
    if (valid && this.validador) {
      
      user.user_rol=this.selected;
      if(this.selected=='Estudiante' || this.selected=='Auxialiar o técnicos de odontología'){
        user.user_pay=70;
      }else if(this.selected=='Odontólogo rural'){
        user.user_pay=90;
      }else if(this.selected=='Odontólogo agremiado a la FOE'){
        user.user_pay=110;
      }else if(this.selected=='Odontólogo no agremiado a la FOE' || this.selected=='Odontólogo extranjero'){
        user.user_pay=140;
      }

      user.user_id = uuidv4();
      this.userService.createUser(user).then(() => {
        swal("OK", "Su registro a sido extoso", "success");
        this.user = {
          user_id: '',
          user_name: '',
          user_lastname: '',
          user_ci: '',
          user_direction:'',
          user_email: '',
          user_phone: '',
          user_rol: '',
          user_pay: 0
        };
      });
    }
  }
  
  validadorDeCedula() {
    let cedula = this.user.user_ci;
    let cedulaCorrecta = false;
    if (cedula.length == 10)
    {    
        let tercerDigito = parseInt(cedula.substring(2, 3));
        if (tercerDigito < 6) {
            let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];       
            let verificador = parseInt(cedula.substring(9, 10));
            let suma:number = 0;
            let digito:number = 0;
            for (let i = 0; i < (cedula.length - 1); i++) {
                digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];      
                suma += ((parseInt((digito % 10)+'') + (parseInt((digito / 10)+''))));
            }
            suma= Math.round(suma);
            if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10)== verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (Math.round(suma % 10))) == verificador) {
                cedulaCorrecta = true;
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
    } else {
        cedulaCorrecta = false;
    }
    
    // console.log(cedulaCorrecta);
    if (cedulaCorrecta==true) {
      let ob;
      let consulta=this.userService.getUserByCI(cedula).subscribe(data=>{ 
        ob=data;
        if(ob.length>0){
          this.validador=false;
        }else{
          this.validador=true;
        }
      });
    }else{
      this.validador=false;
    }
    // console.log(this.validador);
  }

  validarSeleccion(){
    this.seleccionado=true;
  }

}