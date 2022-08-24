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

  constructor(public dialogRef: MatDialogRef<EventsAdminComponent>,
  @Inject(MAT_DIALOG_DATA) public event: Event,
  private readonly eventsService: EventsService) { }
  
  // imagenes = Observable
  imagenes:any;

  ngOnInit(): void {
    console.log(this.event.id);
    this.imagenes=this.eventsService.getImgEventById(this.event.id);
    // console.log(this.imagenes);
    this.imagenes.subscribe(e => {
      console.log(e); // how to access the data //only returns an array of object
    });
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

  updateImage(idImgRempl,event,imagenes){
    console.log(imagenes);
    console.log("qweqweq "+idImgRempl);

    this.eventsService.updateImages(event.target.files,idImgRempl).then((urls) => { 
      for (let o in imagenes) {
        if (imagenes[o].id === idImgRempl) {
          imagenes[o] = urls[0].url;
          // imagenes.unshift(urls[0]);
          // imagenes=imagenes.filter( ob => ob.id !== idImgRempl);
        }
      }
      // imagenes=imagenes.reverse();
      this.imagenes = imagenes;
      console.log(this.imagenes);
    }).catch((e) => alert(e.message));

  }

  addFiles(event, imagenes) {
    this.eventsService.uploadImages(event.target.files).then((urls) => {
      urls=urls.reverse();
      for (let o  in urls) {
        imagenes.push(urls[o]);
      }
      this.imagenes = imagenes;
      // console.log(this.event.images);
    }).catch((e) => alert(e.message));
  }

  deleteImage(imagen) {
    // console.log(imagenes);
    // imagenes=imagenes.slice(1, 3);
    // imagenes=imagenes.reverse();
    // imagenes=imagenes.filter( (ob) => ob.id !== idImage);
    // imagenes=imagenes.reverse();
    // // imagenes=imagenes.reverse();
    // // imagenes=imagenes;
    // // console.log(imagenes);
    // this.imagenes = imagenes;
    this.eventsService.deleteImagesEvent(imagen.id)   
    this.eventsService.deleteImageById(imagen.idImage);
    
  }



}
