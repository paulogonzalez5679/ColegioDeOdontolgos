import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventImage } from 'app/modules/events/event.interface';
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
  listaObj: EventImage[] = [];

  constructor(public dialog: MatDialog, private readonly eventsService: EventsService) {
  }

  ngOnInit(): void {
      this.eventsService.getEvents().subscribe(events => {
          // console.log(events);
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

  async getlistImages(evento) {
    const imagenes=this.eventsService.getImgEventById(evento.id);
    await imagenes.subscribe(e => {
      this.deleteImage(e);
    });
  }

  deleteImage(lista) {
    this.listaObj=lista;
    lista.forEach(async element => {
      await this.eventsService.deleteImagesEvent(element.id);
    });

    try{
      this.eventsService.deleteImagesEvent(lista[0].id);
    }catch(e){};
  }

  deleteEvent(evento) {
      this.getlistImages(evento);
      this.eventsService.deleteEvent(evento.id);
  }

}
