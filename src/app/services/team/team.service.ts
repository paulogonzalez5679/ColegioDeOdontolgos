import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

    constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

    public getTeam(): Observable<Team[]> {
        return this.db.collection<Team>('equipo').valueChanges();
    }

    public uploadImages(files): Promise<ImageTeam[]> {
        return new Promise((resolve, reject) => {
            const urls = [];
            for (const file of files) {
                const id = uuidv4();
                const filePath = `ImagenIntegrante/${id}`;
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

    public createMember(member: Team) {
        return this.db.collection<Team>('equipo').doc(member.team_id).set({...member});
    }

    public async updateMember(member: Team) {
        return this.db.collection<Team>('equipo').doc<Team>(member.team_id).update(member);
    }

    public deleteImageMember(id: string) {
        return this.storage.ref(`ImagenIntegrante/${id}`).delete().toPromise();
    }

    public deleteMember(id: string) {
        return this.db.collection('equipo').doc<Event>(id).delete();
    }


}
