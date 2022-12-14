import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Competition } from '../Competition';
import { CompetitionsService } from '../competitions.service';
import { Game } from '../Game';
import { Team } from '../Team';
@Component({
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition ;
  public teams: Team[] ;
  public games: Game[] ;


  constructor(private competitionsService: CompetitionsService) { }
  ngOnInit() {
    this.getCompetitions();
  }

  public getCompetitions(): void {
    this.competitionsService.getCompetitions().subscribe(
      (response: Competition) => {
        this.competitions = response;
        this.teams = this.competitions.teams;
        this.games = this.competitions.games;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
