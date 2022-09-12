import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { SponsorService } from 'app/services/sponsor/sponsor.service';
import { SponsorsComponent } from '../sponsors/sponsors.component';

@Component({
  selector: 'app-edit-sponsor',
  templateUrl: './edit-sponsor.component.html',
  styleUrls: ['./edit-sponsor.component.css']
})
export class EditSponsorComponent implements OnInit {

  public foto: any;
  public previsualizacion: any;

  constructor(public dialogRef: MatDialogRef<SponsorsComponent>,
    @Inject(MAT_DIALOG_DATA) public sponsor: Sponsor,
    private sanitizer: DomSanitizer,
    private readonly sponsorService: SponsorService) { }

  ngOnInit(): void {
    this.previsualizacion = this.sponsor.imagen[0].url;
  }

  capturarFile($event): any {
    this.foto=$event.target.files;
    const archivoCapturado = $event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion =imagen.base;
    })
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

  editSponsor(): void {
    if(this.foto != undefined){
      this.sponsorService.uploadImages(this.foto).then((urls) => {
        this.sponsorService.deleteImageSponsor(this.sponsor.imagen[0].id);
        this.sponsor.imagen = urls;
        console.log(this.sponsor);
        this.sponsorService.updateSponsor(this.sponsor);
      });
    }
    else{
      this.sponsorService.updateSponsor(this.sponsor);
    }
    this.foto=undefined;
    
    this.dialogRef.close();
  };

  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
