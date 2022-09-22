import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Convention, ConventionImage } from 'app/interfaces/conventions';
import { ConventionsService } from 'app/services/conventions/conventions.service';
import { ConventionsAdminComponent } from '../conventions-admin/conventions-admin.component';

@Component({
  selector: 'app-edit-conventions',
  templateUrl: './edit-conventions.component.html',
  styleUrls: ['./edit-conventions.component.css']
})
export class EditConventionsComponent implements OnInit {

  conventionImage : ConventionImage={id:'', url:''};
  imgs:any;
  public foto: any;
  public previsualizacion: any[] = [];


  constructor(public dialogRef: MatDialogRef<ConventionsAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public convention: Convention,
    private readonly conventionsService: ConventionsService,
    private sanitizer: DomSanitizer) { }

  // imagenes = Observable
  imagenes:any;

  ngOnInit(): void {
    this.conventionsService.getConventionById(this.convention.id).subscribe((data)=>{
      console.log(data.image);
      this.previsualizacion.push(data.image[0].url);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  updateImage($event): any {
    this.previsualizacion = [];
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

  updateEvent(convention: Convention, valid: boolean) {
    if (valid) {
      if(this.foto != undefined){
        console.log(this.foto);
        const idImageAntigua = this.convention.image[0].id;
        this.conventionsService.uploadImages(this.foto).then((urls) => {
          convention.image = urls;
          this.conventionsService.updateConvention(this.convention.id, convention);
          this.conventionsService.deleteImageById(idImageAntigua);
        }).catch((e) => alert(e.message));
      }
      else{
        this.conventionsService.updateConvention(this.convention.id, convention);
      }
    }
    this.dialogRef.close();
  }

  deleteImage(imagen) { 
    this.conventionsService.deleteImageById(imagen.idImage);
  }

}
