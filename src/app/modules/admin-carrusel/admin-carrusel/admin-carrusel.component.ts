import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {v4 as uuidv4} from 'uuid';
import { CarruselService } from 'app/services/carrusel/carrusel.service';

@Component({
  selector: 'app-admin-carrusel',
  templateUrl: './admin-carrusel.component.html',
  styleUrls: ['./admin-carrusel.component.css']
})
export class AdminCarruselComponent implements OnInit {

  constructor(public dialog: MatDialog, private readonly carruselService: CarruselService) { }

  urlsFirebase:any;
  imagenesCarrusel:any;

  ngOnInit(): void {
    this.imagenesCarrusel=this.carruselService.getImgCarrusel();
  }

  setFiles(event) {
    const id = uuidv4();
    this.carruselService.uploadCarruselImages(event.target.files).then((urls) => {
        this.urlsFirebase = urls;
        this.urlsFirebase.forEach((img) => {
          this.carruselService.createImagesCarrusel({id:id, idImagen:img.id, url:img.url});
        });
    }).catch((e) => alert(e.message));
  }

  deleteImage(imagenes){
    // console.log(imagenes.idImagen);
    this.carruselService.deleteImageStorageCarruselById(imagenes.idImagen);

    this.carruselService.deleteImagesCarrusel(imagenes.id);
  };

  editImage(imagenCarrusel,event){
    // console.log(imagenCarrusel);
    this.carruselService.uploadCarruselImages(event.target.files).then((urls) => {
        this.urlsFirebase = urls;
        this.urlsFirebase.forEach((img) => {
          this.carruselService.deleteImageStorageCarruselById(imagenCarrusel.idImagen)
          // console.log(this.urlsFirebase);
          this.carruselService.updateImagenCarrucel(imagenCarrusel.id, {id:imagenCarrusel.id, idImagen:img.id, url:img.url});
        });
    }).catch((e) => alert(e.message));
  }
    

}
