import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamService } from 'app/services/team/team.service';
import { AddTeamComponent } from '../add-team/add-team.component';
import { EditTeamComponent } from '../edit-team/edit-team.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public team: any = [];
  constructor(public dialog: MatDialog, private readonly teamService: TeamService) { }

  ngOnInit(): void {
    this.team = this.teamService.getTeam();
  }

  addMember(): void{
    const dialogRef = this.dialog.open(AddTeamComponent, {
      width: '550px',
      height: '500px'
    });  
  }

  editMember(member:Team): void{
    const dialogRef = this.dialog.open(EditTeamComponent, {
      width: '550px',
      height: '500px',
      data: member,
    });  
  }

  deleteMember(member: Team): void {
    this.teamService.deleteImageMember(member.imagen[0].id).then(() => {
      this.teamService.deleteMember(member.team_id);
    });
  }

}
