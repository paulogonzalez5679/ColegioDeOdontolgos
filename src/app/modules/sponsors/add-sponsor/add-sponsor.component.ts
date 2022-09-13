import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { SponsorsComponent } from '../sponsors/sponsors.component';
import {v4 as uuidv4} from 'uuid';
import { SponsorService } from 'app/services/sponsor/sponsor.service';

@Component({
  selector: 'app-add-sponsor',
  templateUrl: './add-sponsor.component.html',
  styleUrls: ['./add-sponsor.component.css']
})
export class AddSponsorComponent implements OnInit {

  public previsualizacion: string;
  public foto: any;
  public sponsor: Sponsor;

  constructor(public dialogRef: MatDialogRef<SponsorsComponent>,private readonly sponsorService: SponsorService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sponsor= {
      sponsor_id: '',
      sponsor_url: ''
    }
  }

  capturarFile($event): any {
    this.foto=$event.target.files;
    const archivoCapturado = $event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(){
    this.sponsorService.uploadImages(this.foto).then((urls) => {
      const id = uuidv4();
      this.sponsor.sponsor_id = id;
      this.sponsor.imagen=urls;
      this.sponsorService.createSponsor(this.sponsor);
    });
    this.dialogRef.close();
  }
  
}
