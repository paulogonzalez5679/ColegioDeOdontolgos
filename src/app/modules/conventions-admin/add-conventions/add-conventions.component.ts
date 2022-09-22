import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Convention, ConventionImage } from 'app/interfaces/conventions';
import { ConventionsService } from 'app/services/conventions/conventions.service';
import { ConventionsAdminComponent } from '../conventions-admin/conventions-admin.component';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-add-conventions',
  templateUrl: './add-conventions.component.html',
  styleUrls: ['./add-conventions.component.css']
})
export class AddConventionsComponent{

  convention : Convention={title:'', description:'', url:''}
  conventionImage : ConventionImage={id:'', url:''};
  imagenes = []
  public foto: any;
  public previsualizacion: any[] = [];
  
  constructor(public dialogRef: MatDialogRef<ConventionsAdminComponent>,
    private readonly conventionsService: ConventionsService,
    private sanitizer: DomSanitizer) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setFiles($event): any {
    this.foto=$event.target.files;
    const archivoCapturado = $event.target.files
    Array.from(archivoCapturado).forEach((file) => {
      this.extraerBase64(file).then((imagen: any) => {
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

  submit(convention: Convention, valid: boolean) {
    if (valid) {
      this.conventionsService.uploadImages(this.foto).then((urls) => {
        convention.image = urls;
        const numEvento = Math.floor(Math.random() * 100);
        this.dialogRef.close();
        let id = uuidv4();
        this.conventionsService.createConvention(id, convention);
        
      }).catch((e) => alert(e.message));
    }
  }

}
