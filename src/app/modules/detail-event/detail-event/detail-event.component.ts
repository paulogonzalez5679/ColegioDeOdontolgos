import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventsAdminComponent } from 'app/modules/events-admin/events-admin/events-admin.component';
import { Event } from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';
import { ListEventsComponent } from 'app/modules/list-events/list-events/list-events.component';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public event: Event) { }

  ngOnInit(): void {
  }

}
