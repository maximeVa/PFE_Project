import { HttpErrorResponse } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Competition } from '../models/Competition';
import { CompetitionsService } from '../competitions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from "../models/Game";
import { TeamClass } from '../models/TeamClass';
@Component({
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  public competitions: Competition[] = [] ;
  public teams: TeamClass[]= [] ;
  public games: Game[]= [] ;


  constructor(private competitionsService: CompetitionsService, private router : ActivatedRoute) { }
  ngOnInit() {
    this.getCompetitions(this.router.snapshot.params["divisionName"]);
  }

  public getCompetitions(divisionName: String ) {
    this.competitionsService.getCompetitions(divisionName).subscribe((competitionsData) =>{
      for (let index = 0; index < competitionsData.length; index++) {
        const competitionData = competitionsData[index];
        competitionData.teams.forEach(team => {
          //create a new teamClass object for each team
          this.teams.push(new TeamClass(team));
        });
        this.teams.sort((a,b) => (a.divisionPoints < b.divisionPoints) ? 1 : ((b.divisionPoints < a.divisionPoints) ? -1 : 0));
        competitionData.gamesPlayed.forEach(game => {
          //incremente games played for each team
          this.teams.find(team => team.name == game.guestClub.name)?.increment();
          this.teams.find(team => team.name == game.hostClub.name)?.increment();
          this.games.push(game);
        });
      }
      this.getGameRecap();
    });
  }
  public getGameRecap(){
    //make http request to get game recap
    this.competitionsService.getGameRecap().subscribe((gameRecaps) =>{
      //loop through each gameRecap and increment the wins of each team if the team has more goals than the other team
      gameRecaps.forEach(gameRecap => {
        if(gameRecap.guestScore > gameRecap.hostScore){
          //guest team wins
          this.teams.find(team => team.name == gameRecap.game.guestClub.name)?.incrementWins();
          this.teams.find(team => team.name == gameRecap.game.hostClub.name)?.incrementLoses();
        }else if(gameRecap.guestScore < gameRecap.hostScore){
          //host team wins
          this.teams.find(team => team.name == gameRecap.game.hostClub.name)?.incrementWins();
          this.teams.find(team => team.name == gameRecap.game.guestClub.name)?.incrementLoses();
        }else if(gameRecap.guestScore == gameRecap.hostScore){
          //draw
          this.teams.find(team => team.name == gameRecap.game.guestClub.name)?.incrementDraws();
          this.teams.find(team => team.name == gameRecap.game.hostClub.name)?.incrementDraws();
        }
        //loop trough each set and increment the setPTW of each team if the team has more goals than the other team
        gameRecap.sets.forEach(set => {
          if(set.guestScore > set.hostScore){
            //guest team wins
            this.teams.find(team => team.name == gameRecap.game.guestClub.name)?.incrementSetPTW();
            this.teams.find(team => team.name == gameRecap.game.hostClub.name)?.incrementSetPTL();
          }
          else if(set.guestScore < set.hostScore){
            //host team wins
            this.teams.find(team => team.name == gameRecap.game.hostClub.name)?.incrementSetPTW();
            this.teams.find(team => team.name == gameRecap.game.guestClub.name)?.incrementSetPTL();
          }
        });

      });
      console.log(this.teams);
      //console.log(gameRecaps);
    });
  }
}
