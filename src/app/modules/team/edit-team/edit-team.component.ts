import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { TeamService } from 'app/services/team/team.service';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  public foto: any;
  public previsualizacion: any;

  constructor(public dialogRef: MatDialogRef<TeamComponent>,
    @Inject(MAT_DIALOG_DATA) public member: Team,
    private sanitizer: DomSanitizer,
    private readonly teamService: TeamService,) { }

  ngOnInit(): void {
    this.previsualizacion = this.member.imagen[0].url;
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

  editMember(): void {
    this.teamService.uploadImages(this.foto).then((urls) => {
      this.teamService.deleteImageMember(this.member.imagen[0].id);
      this.member.imagen = urls;
      this.teamService.updateMember(this.member);
    });
    this.dialogRef.close();
  };

  onNoClick(): void {
    this.dialogRef.close();
  }

}
