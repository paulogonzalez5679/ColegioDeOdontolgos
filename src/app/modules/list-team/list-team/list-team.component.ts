import { Component, OnInit } from '@angular/core';
import { TeamService } from 'app/services/team/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  team: any;
  constructor(private readonly teamService: TeamService) { }

  ngOnInit(): void {
    this.team = this.teamService.getTeam();
  }

}
