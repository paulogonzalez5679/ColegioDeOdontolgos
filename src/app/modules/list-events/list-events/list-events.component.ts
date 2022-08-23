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
  
  list_cards=[];
  constructor(private readonly eventsService: EventsService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
        console.log(events);
        this.list_cards = events;
    });
  }

  viewEvent(event:Event): void {
    const dialogRef = this.dialog.open(DetailEventComponent, {
      width: 'max-content',
      height: 'max-content',
      data: event,
    });
  }

}
