import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsAdminComponent } from '../events-admin/events-admin.component';
import { Event, EventImage } from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent{
  
  event : Event={title:'', description:''}
  eventImage : EventImage={idImage:'',idEvent:'', url:''};
  imagenes = []

  constructor(
    public dialogRef: MatDialogRef<EventsAdminComponent>,
    private readonly eventsService: EventsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFiles(event) {
      this.eventsService.uploadImages(event.target.files).then((urls) => {
          this.imagenes = urls;
    }).catch((e) => alert(e.message));
  }

  submit() {
    const numEvento = Math.floor(Math.random() * 100);
    this.dialogRef.close();
    let id = uuidv4();
    this.eventsService.createEvent(id, this.event).then(
      () => console.log('evento guardado')).catch((e) => alert(e.message));
    
    this.imagenes.forEach((img) => {
      this.eventImage={idEvent:id, idImage:img.id,url:img.url};
      this.eventsService.createImagesEvent({idEvent:id, idImage:img.id,url:img.url}).then(
        () => console.log('imagen evento guardado')).catch((e) => alert(e.message));
    });
  }

}
