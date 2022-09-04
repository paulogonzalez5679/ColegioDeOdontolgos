import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventsService } from 'app/modules/events/events.service';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.css']
})

export class EventsAdminComponent implements OnInit {

  name: string;
  list_cards=[];

  constructor(public dialog: MatDialog, private readonly eventsService: EventsService) {
  }

  ngOnInit(): void {
      this.eventsService.getEvents().subscribe(events => {
          console.log(events);
          this.list_cards = events;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '550px',
      height: '500px'
    });
  }

  editEvent(event:Event): void {
    const dialogRef = this.dialog.open(EditEventComponent, {
      width: '550px',
      height: '500px',
      data: event,
    });
  }

  deleteImage(evento) {
    let imagenes=this.eventsService.getImgEventById(evento.id);
    imagenes.subscribe(e => {
       e.forEach(element => {
        this.eventsService.deleteImagesEvent(element.id)   
        this.eventsService.deleteImageById(element.idImage);
       });
    });
  }


  deleteEvent(evento) {
      this.deleteImage(evento)
      return this.eventsService.deleteEvent(evento.id).then(() => alert('Eliminado')).catch((e) => alert(e.message));
  }

}
