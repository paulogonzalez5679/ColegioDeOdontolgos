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

  animal: string;
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
      height: '500px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  editEvent(event:Event): void {
    const dialogRef = this.dialog.open(EditEventComponent, {
      width: '550px',
      height: '500px',
      data: event,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  deleteImage(imagenes) {
    imagenes.forEach(element => {
      // console.log(element.id);
      this.eventsService.deleteImageById(element.id);
    });
  }

  deleteEvent(evento) {
      this.deleteImage(evento.images)
      return this.eventsService.deleteEvent(evento.id).then(() => alert('Eliminado')).catch((e) => alert(e.message));
  }

}
