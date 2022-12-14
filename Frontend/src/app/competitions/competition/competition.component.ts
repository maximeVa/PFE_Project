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
  public competitions: Competition[] = [] ;
  public teams: Team[]= [] ;
  public games: Game[]= [] ;


  constructor(private competitionsService: CompetitionsService) { }
  ngOnInit() {
    this.getCompetitions();
  }

  public getCompetitions() {
    this.competitionsService.getCompetitions().subscribe((competitionsData) =>{
      for (let index = 0; index < competitionsData.length; index++) {
        const competitionData = competitionsData[index];
        console.log(competitionData);
        competitionData.teams.forEach(team => {
          this.teams.push(team);
        });

        competitionData.gamesPlayed.forEach(game => {
          this.games.push(game);
        });

      }

    },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
