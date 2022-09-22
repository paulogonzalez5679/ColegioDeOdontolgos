import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Convention, ConventionImage } from 'app/interfaces/conventions';
import { Observable } from 'rxjs';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ConventionsService {

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
  }

  public getConventions(): Observable<Convention[]> {
      return this.db.collection<Convention>('convenios').valueChanges();
  }

  public getConventionById(id: string): Observable<Convention> {
      return this.db.collection<Convention>('convenios').doc<Convention>(id).valueChanges();
  }

  public getImgConvention(): Observable<any[]> {
      return this.db.collection('imagenesConvenios').valueChanges();
  }

  public createConvention(id: string, event: Convention) {
      return this.db.collection<Convention>('convenios').doc(id).set({...event, id});
  }

  public async updateConvention(id: string, event: Convention) {
      return this.db.collection<Convention>('convenios').doc<Convention>(id).update(event);
  }

  public deleteConvention(id: string) {
      return this.db.collection<Convention>('convenios').doc<Convention>(id).delete();
  }

  async deleteImagesConvention(id: string) {
      await this.db.collection('imagenesConvenios').doc<Convention>(id).delete();
  }

  public deleteAllConventions() {
      return this.db.collection<Convention>('convenios').get().toPromise().then(async (snapshot) => {
          for await (const doc of snapshot.docs) {
              await doc.ref.delete();
          }
      });
  }

  public uploadImages(files): Promise<ConventionImage[]> {
      return new Promise((resolve, reject) => {
          const urls = [];
          for (const file of files) {
              const id = uuidv4();
              const filePath = `Convenios/${id}`;
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

  async deleteImageById(id: string) {
      await this.storage.ref(`Convenios/${id}`).delete().toPromise();
  }
}
