import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsAdminComponent } from '../events-admin/events-admin.component';
import { Event } from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent{
  
  event : Event={images:[], title:'', description:''}

  constructor(
    public dialogRef: MatDialogRef<EventsAdminComponent>,
    private readonly eventsService: EventsService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFiles(event) {
      this.eventsService.uploadImages(event.target.files).then((urls) => {
          this.event.images = urls;
    }).catch((e) => alert(e.message));
  }

  submit() {
    const numEvento = Math.floor(Math.random() * 100);
    this.dialogRef.close();
    return this.eventsService.createEvent(this.event).then(
      () => alert('Guardado')).catch((e) => alert(e.message));
  }

}
