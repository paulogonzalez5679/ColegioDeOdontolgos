import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }
  
  public getSponsor(): Observable<Sponsor[]> {
      return this.db.collection<Sponsor>('sponsor').valueChanges();
  }

  public uploadImages(files): Promise<ImageSponsor[]> {
      return new Promise((resolve, reject) => {
          const urls = [];
          for (const file of files) {
              const id = uuidv4();
              const filePath = `ImagenSponsor/${id}`;
              const task = this.storage.upload(filePath, file);
              task.then((t) => {
                  t.ref.getDownloadURL().then((url) => {
                      urls.push({url, id});
                      if (urls.length === files.length) {
                          resolve(urls);
                      }
                  });
              }).catch((e) => reject(e));
          }
      });
  }

  public createSponsor(sponsor: Sponsor) {
      return this.db.collection<Sponsor>('sponsor').doc(sponsor.sponsor_id).set({...sponsor});
  }

  public async updateSponsor(sponsor: Sponsor) {
      return this.db.collection<Sponsor>('sponsor').doc<Sponsor>(sponsor.sponsor_id).update(sponsor);
  }

  public deleteImageSponsor(id: string) {
      return this.storage.ref(`ImagenSponsor/${id}`).delete().toPromise();
  }

  public deleteSponsor(id: string) {
      return this.db.collection('sponsor').doc<Sponsor>(id).delete();
  }

}
