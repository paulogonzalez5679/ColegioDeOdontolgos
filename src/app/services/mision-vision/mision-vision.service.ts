import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisionVisionService {

  constructor(private db: AngularFirestore) { }

  public getMision(): Observable<any[]>{
    return this.db.collection('mision').valueChanges();
  }
  
  public getVision(): Observable<any[]>{
    return this.db.collection('vision').valueChanges();
  }

  public async updateMision(id: string, mision: Mision) {
    return this.db.collection<Mision>('mision').doc<Mision>(id).update(mision);
  }

  public async updateVision(id: string, vision: Vision) {
    return this.db.collection<Vision>('vision').doc<Vision>(id).update(vision);
  }
}
