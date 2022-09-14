import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventsAdminComponent } from '../events-admin/events-admin.component';
import { Event, EventImage } from 'app/modules/events/event.interface';
import { EventsService } from 'app/modules/events/events.service';
import {v4 as uuidv4} from 'uuid';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent{
  
  event : Event={title:'', description:''}
  eventImage : EventImage={idImage:'',idEvent:'', url:''};
  imagenes = []
  public foto: any;
  public previsualizacion: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<EventsAdminComponent>,
    private readonly eventsService: EventsService,
    private sanitizer: DomSanitizer
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  setFiles($event): any {
    this.foto=$event.target.files;
    const archivoCapturado = $event.target.files
    // console.log(archivoCapturado);
    Array.from(archivoCapturado).forEach((file) => {
      // console.log(file);
      this.extraerBase64(file).then((imagen: any) => {
        // console.log(imagen.base);
        this.previsualizacion.push(imagen.base);
      })
    });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  submit() {

    this.eventsService.uploadImages(this.foto).then((urls) => {
      this.imagenes = urls;
      const numEvento = Math.floor(Math.random() * 100);
      this.dialogRef.close();
      let id = uuidv4();
      this.eventsService.createEvent(id, this.event);
      
      this.imagenes.forEach((img) => {
        this.eventImage={idEvent:id, idImage:img.id,url:img.url};
        this.eventsService.createImagesEvent({idEvent:id, idImage:img.id,url:img.url});
      });
    }).catch((e) => alert(e.message));

  }

}
