import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private db: AngularFirestore

  ) { }

  //Crea una nueva categoria
  public createUser(user: User) {
    return this.db.collection('usuarios').doc(user.user_id).set(user);
  }

  public getUsers(): Observable<any[]> {
    return this.db.collection('usuarios').valueChanges();
  }
  
}
