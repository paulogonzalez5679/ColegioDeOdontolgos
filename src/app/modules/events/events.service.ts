import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {AngularFireStorage} from '@angular/fire/storage';
import {v4 as uuidv4} from 'uuid';
import {Event, EventImage} from './event.interface';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    }

    public getEvents(): Observable<Event[]> {
        return this.db.collection<Event>('eventos').valueChanges();
    }

    public getEventById(id: string): Observable<Event> {
        return this.db.collection<Event>('eventos').doc<Event>(id).valueChanges();
    }

    public getImgEventById(id: string): Observable<any[]> {
        return this.db.collection('imagenesEventos', ref => ref.where('idEvent', '==', id)).valueChanges();
    }

    public createEvent(id: string, event: Event) {
        return this.db.collection<Event>('eventos').doc(id).set({...event, id});
    }

    public createImagesEvent(eventImage: EventImage) {
        const id = uuidv4();
        return this.db.collection<EventImage>('imagenesEventos').doc(id).set({...eventImage, id});
    }

    public async updateEvent(id: string, event: Event) {
        return this.db.collection<Event>('eventos').doc<Event>(id).update(event);
    }

    public deleteEvent(id: string) {
        return this.db.collection<Event>('eventos').doc<Event>(id).delete();
    }

    public deleteImagesEvent(id: string) {
        return this.db.collection('imagenesEventos').doc<Event>(id).delete();
    }

    public deleteAllEvents() {
        return this.db.collection<Event>('eventos').get().toPromise().then(async (snapshot) => {
            for await (const doc of snapshot.docs) {
                await doc.ref.delete();
            }
        });
    }

    public uploadImages(files): Promise<EventImage[]> {
        return new Promise((resolve, reject) => {
            const urls = [];
            for (const file of files) {
                const id = uuidv4();
                const filePath = `Eventos/${id}`;
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

    public deleteImageById(id: string) {
        return this.storage.ref(`Eventos/${id}`).delete().toPromise();
    }

    public async updateImages(actual, idAntigua): Promise<EventImage[]> {
        
        let urls = [];

        await new Promise((resolve, reject) => {
            for (const file of actual) {
                const id = uuidv4();
                const filePath = `Eventos/${id}`;
                const task = this.storage.upload(filePath, file);
                task.then((t) => {
                    t.ref.getDownloadURL().then((url) => {
                        urls.push({url, id});
                        if (urls.length === actual.length) {
                            resolve(urls);
                        }
                    });
                }).catch((e) => reject(e));
            }
        });

        this.deleteImageById(idAntigua)

        return urls;
        
    }
}
