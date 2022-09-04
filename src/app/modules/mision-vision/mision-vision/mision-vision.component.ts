import { Component, OnInit } from '@angular/core';
import { MisionVisionService } from 'app/services/mision-vision/mision-vision.service';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css']
})
export class MisionVisionComponent implements OnInit {

  mision:any;
  vision:any;

  editMisionFlag=false;
  editVisionFlag=false;

  auxMision='';
  auxVision='';

  constructor(private readonly misionVisionService: MisionVisionService) { }

  ngOnInit(): void {
    this.getMision().subscribe(data=>{
      this.mision=data;
    });
    this.getVision().subscribe(data=>{
      this.vision=data;
    });
  }

  getMision(){
    return this.misionVisionService.getMision();
  }

  getVision(){
    return this.misionVisionService.getVision();
  }

  btnActualizarMision(){
    this.editMisionFlag=true;
  }

  btnActualizarVision(){
    this.editVisionFlag=true;
  }

  updateMision(mision:any){
    this.misionVisionService.updateMision(mision.id, mision);
    this.editMisionFlag=false;
  }

  updateVision(vision:Mision){
    this.misionVisionService.updateVision(vision.id, vision);
    this.editVisionFlag=false;
  }

  cancelUpdateMision(){
    this.getMision().subscribe(data=>{
      this.mision=data;
    });
    this.editMisionFlag=false;
    console.log(this.mision);
  }

  cancelUpdateVision(){
    this.getVision().subscribe(data=>{
      this.vision=data;
    });
    this.editVisionFlag=false;
  }

}
