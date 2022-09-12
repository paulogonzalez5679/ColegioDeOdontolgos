import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SponsorService } from 'app/services/sponsor/sponsor.service';
import { AddSponsorComponent } from '../add-sponsor/add-sponsor.component';
import { EditSponsorComponent } from '../edit-sponsor/edit-sponsor.component';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  public sponsor: any = [];
  constructor(public dialog: MatDialog, private readonly sponsorService: SponsorService) { }

  ngOnInit(): void {
    this.sponsor = this.sponsorService.getSponsor();
  }

  addSponsor(){
    const dialogRef = this.dialog.open(AddSponsorComponent, {
      width: '550px',
      height: '500px'
    });  
  }

  editMember(sponsor:Sponsor): void{
    const dialogRef = this.dialog.open(EditSponsorComponent, {
      width: '550px',
      height: '500px',
      data: sponsor,
      panelClass: 'promo-dialog'
    });  
  }

  deleteMember(sponsor: Sponsor): void {
    this.sponsorService.deleteImageSponsor(sponsor.imagen[0].id).then(() => {
      this.sponsorService.deleteSponsor(sponsor.sponsor_id);
    });
  }

}
