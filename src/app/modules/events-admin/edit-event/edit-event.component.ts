import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsAdminComponent } from '../events-admin/events-admin.component';
import { Event } from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventsAdminComponent>,
  @Inject(MAT_DIALOG_DATA) public event: Event,
  private readonly eventsService: EventsService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFiles(event) {
      this.eventsService.uploadImages(event.target.files).then((urls) => {
          this.event.images = urls;
    }).catch((e) => alert(e.message));
  }

  updateEvent() {
    return this.eventsService.updateEvent(this.event.id, this.event).then(() => this.dialogRef.close()).catch((e) => alert(e.message));
  }



}
