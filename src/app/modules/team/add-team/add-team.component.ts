import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from 'app/services/team/team.service';
import { TeamComponent } from '../team/team.component';
import { DomSanitizer } from '@angular/platform-browser';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  public previsualizacion: string;
  public foto: any;
  public integrante: Team;
  constructor(public dialogRef: MatDialogRef<TeamComponent>,private readonly teamService: TeamService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.integrante= {
      team_id: '',
      team_name: '',
      team_contact: '',
      team_email: '',
      team_position: ''
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
    this.teamService.uploadImages(this.foto).then((urls) => {
      const id = uuidv4();
      this.integrante.team_id = id;
      this.integrante.imagen=urls;
      this.teamService.createMember(this.integrante);
    });
    this.dialogRef.close();
  }

  cancelar() {
    
  }

}
