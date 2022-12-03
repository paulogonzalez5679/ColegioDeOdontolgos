import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'app/services/user/user.service';
import swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import * as archivePayment from "./../../../../assets/js/function.js";
import { MessageService } from "app/services/message/message.service";
import { DatePipe } from '@angular/common';

declare var $: any;


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;

  public user: User;
  public validador = true;
  seleccionado = false;
  profSeleccionado = false;
  selected = '';
  profesion = '';
  confirmacionRural=false;
  confirmacionAgremiado=false;

  public roles: Array<Rol> = [
    {
      opt: 'Estudiante',
      value: 70.00,
    },
    {
      opt: 'Auxialiar o técnicos de odontología',
      value: 70.00,
    },
    {
      opt: 'Odontólogo rural',
      value: 90.00,
    },
    {
      opt: 'Odontólogo agremiado a la FOE',
      value: 110.00,
    },
    {
      opt: 'Odontólogo no agremiado a la FOE',
      value: 140.00,
    },
    {
      opt: 'Odontólogo extranjero',
      value: 140.00,
    }, 
  ]

  public rolSelected: Rol;
  public showPpButton: boolean = false;

  constructor(private userService: UserService, private messageService: MessageService,) { }

  ngOnInit(): void {
    this.todayWithPipe = this.pipe.transform(Date.now(), 'M/d/yy, h:mm a');
    this.user = {
      user_id: '',
      user_profesion: '',
      user_name: '',
      user_lastname: '',
      user_ci: '',
      user_direction: '',
      user_email: '',
      user_phone: '',
      user_rol: '',
    };
  }

  /**
  * *** Funcion para almacenar los mensajes del usuario ***
  * *** Se obtine la información del formulario de contacto ***
  * @param user
  * @param valid
  */
  onSaveUser(user: User, valid: boolean) {
    swal({
      title: "Registro",
      text: "Recuerda solo podras registrarte una vez",
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true     
    }) .then((willDelete) => {
        if(willDelete.value){
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
          user.user_fecha=this.todayWithPipe;
          user.user_id = uuidv4();
          user.user_profesion = this.profesion;
          this.user = user;
          this.userService.createUser(user).then(() => {
            swal("OK", "Su registro ha sido extoso, por favor ingrese su forma de pago para finalizar", "success");
            this.InitPaymentWhitPayphone();
          });
          swal("Su registro se ha realizado con exito");
        }
    });
    // if (valid && this.validador) {

  
    // }
  }

  validadorDeCedula() {
    let cedula = this.user.user_ci;
    let cedulaCorrecta = false;
    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
        }
        suma = Math.round(suma);
        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
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
      let consulta = this.userService.getUserByCI(cedula).subscribe(data => {
        ob = data;
        if (ob.length > 0) {
          this.validador = false;
        } else {
          this.validador = true;
        }
      });
    } else {
      this.validador = false;
    }
    this.validador = true;
    // console.log(this.validador);
  }

  validarSeleccionProf(){
    this.profSeleccionado = true;
  }

  validarSeleccion() {
    this.showPpButton = false;
    this.seleccionado = true;
    if(this.selected == "Odontólogo rural"){
      this.confirmacionRural=true;
      this.confirmacionAgremiado=false;
    }
    else if(this.selected == 'Odontólogo agremiado a la FOE'){
      this.confirmacionRural=false;
      this.confirmacionAgremiado=true;
    }
    else{
      this.confirmacionRural=false;
      this.confirmacionAgremiado=false;
    }
    // console.log('*** validarSeleccion ***');
    // console.log(this.selected);

    this.roles.forEach((rol: Rol) => {
      if (rol.opt == this.selected) {
        console.log(rol.opt);
        console.log(rol.value);
        this.rolSelected = rol;
      }
    });
  }

  public async InitPaymentWhitPayphone() {
    console.log('*** InitPaymentWhitPayphone ***');
    // if (valid) {
      this.showPpButton = false;

      setTimeout(async () => {
        $('#modalPayment').modal('show');

        this.showPpButton = true;
        setTimeout(async () => {
          var idd = new Date().getTime();
          console.log(this.rolSelected.value);
          var response = await archivePayment.InitPaymentWhitPayphone(
            (this.rolSelected.value * 100), idd, idd, this.user
          );
          console.log('*** response ***');
          console.log(response);
          
        }, 300);
      }, 100);
    // }
  }
}

class Rol {
  opt?: string;
  value?: number;
}