import { Component, OnInit } from '@angular/core';
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
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.user = {
      user_id: '',
      user_name: '',
      user_lastname: '',
      user_email: '',
      user_phone: ''
    };
  }

  onSaveUser(user: User, valid: boolean) {
    if (valid) {
      user.user_id = uuidv4();
      this.userService.createUser(user).then(() => {
        swal("OK", "Su registro a sido extoso", "success");
        user = {
          user_id: '',
          user_name: '',
          user_lastname: '',
          user_email: '',
          user_phone: ''
        };
      });
    }
  }

}
