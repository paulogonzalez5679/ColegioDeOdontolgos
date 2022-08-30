import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailEventComponent } from 'app/modules/detail-event/detail-event/detail-event.component';
import { EventsService } from 'app/modules/events/events.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})

export class ListEventsComponent implements OnInit {
  
  list_cards:any;
  imagenes:any;
  nuevo_vector: Object[]=[];
  
  constructor(private readonly eventsService: EventsService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.list_cards=this.eventsService.getEvents();
    this.imagenes=this.eventsService.getImgEvent();

    this.list_cards.subscribe(event => {
      event.forEach(element => {
        // console.log(element);
        let nuevo_objeto={id:'',title:'',description:'', images:[]};
        nuevo_objeto.id=element.id;
        nuevo_objeto.title=element.title;
        nuevo_objeto.description=element.description;
        this.imagenes.subscribe(e => {
          e.forEach(image => {
            if (element.id == image.idEvent){
              console.log(element.id+' '+image.idEvent);
              nuevo_objeto.images.push(image);
              // console.log(this.nuevo_objeto.images);
            }
          });
        });
        this.nuevo_vector.push(nuevo_objeto);
        // console.log(this.nuevo_vector);
        nuevo_objeto.images=[];
        
        
      });
    });
  }

  viewEvent(event:Event): void {
    const dialogRef = this.dialog.open(DetailEventComponent, {
      width: '700px',
      height: '700px',
      data: event,
    });
  }



}
