import { Injectable } from '@angular/core';
import { CarruselImage } from 'app/interfaces/carruselImage';
import {AngularFireStorage} from '@angular/fire/storage';
import {v4 as uuidv4} from 'uuid';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

    constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

    public createImagesCarrusel(carruselImage: CarruselImage) {
        const id = uuidv4();
        return this.db.collection<CarruselImage>('imagenesCarrusel').doc(id).set({...carruselImage, id});
    }

    public getImgCarrusel(): Observable<any[]> {
        return this.db.collection('imagenesCarrusel').valueChanges();
    }

    public uploadCarruselImages(files): Promise<CarruselImage[]> {
        return new Promise((resolve, reject) => {
            const urls = [];
            for (const file of files) {
                const id = uuidv4();
                const filePath = `Carrusel/${id}`;
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

    public deleteImageStorageCarruselById(id: string) {
        return this.storage.ref(`Carrusel/${id}`).delete().toPromise();
    }

    public deleteImagesCarrusel(id: string) {
        return this.db.collection('imagenesCarrusel').doc<Event>(id).delete();
    }

    public async updateImagenCarrucel(id: string, imagenCarrucel: CarruselImage) {
        return this.db.collection<CarruselImage>('imagenesCarrusel').doc<CarruselImage>(id).update(imagenCarrucel);
    }

}
