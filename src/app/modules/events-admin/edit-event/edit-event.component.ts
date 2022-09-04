import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsAdminComponent } from '../events-admin/events-admin.component';
import { Event, EventImage} from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  eventImage : EventImage={idImage:'',idEvent:'', url:''};
  imgs:any;
  
  constructor(public dialogRef: MatDialogRef<EventsAdminComponent>,
  @Inject(MAT_DIALOG_DATA) public event: Event,
  private readonly eventsService: EventsService) { }
  
  // imagenes = Observable
  imagenes:any;

  ngOnInit(): void {
    this.imagenes=this.eventsService.getImgEventById(this.event.id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFiles(event) {
      this.eventsService.uploadImages(event.target.files).then((urls) => {
          this.imagenes = urls;
    }).catch((e) => alert(e.message));
  }

  updateEvent() {
    return this.eventsService.updateEvent(this.event.id, this.event).then(() => this.dialogRef.close()).catch((e) => alert(e.message));
  }

  updateImage(id,idImgRempl,event){
    console.log(id);
    console.log(idImgRempl);
    
    this.eventsService.uploadImages(event.target.files).then((urls) => {
      this.imgs = urls;
      this.imgs.forEach((img) => {
        this.eventImage={idEvent:this.event.id, idImage:img.id,url:img.url};
        console.log(this.eventImage);
        this.eventsService.createImagesEvent(this.eventImage).then(
          () => console.log('imagen evento guardado')).catch((e) => alert(e.message));
      });
    }).catch((e) => alert(e.message));

    this.eventsService.deleteImagesEvent(id)   
    this.eventsService.deleteImageById(idImgRempl);

  }

  addFiles(event) {
    
    this.eventsService.uploadImages(event.target.files).then((urls) => {
      this.imgs = urls;
      this.imgs.forEach((img) => {
        this.eventImage={idEvent:this.event.id, idImage:img.id,url:img.url};
        console.log(this.eventImage);
        this.eventsService.createImagesEvent(this.eventImage).then(
          () => console.log('imagen evento guardado')).catch((e) => alert(e.message));
      });
    }).catch((e) => alert(e.message));

  }

  deleteImage(imagen) {
    this.eventsService.deleteImagesEvent(imagen.id)   
    this.eventsService.deleteImageById(imagen.idImage);
  }



}
