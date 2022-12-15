import { Component , OnInit } from '@angular/core';
import { LeaderPlayerService } from './leader-player.service';
import { club } from './models/club';
import { player } from './models/player';

@Component({
  selector: 'app-leader-players',
  templateUrl: './leader-player.component.html',
  styleUrls: ['./leader-player.component.scss']
})
export class LeaderPlayerComponent implements OnInit{
  public ALLplayers: player[] = [] ;

  constructor(private leaderPlayerService: LeaderPlayerService) { }
  ngOnInit() {
    /*
    this.leaderPlayerService.getClubs().subscribe(
      (response: club[]) => {
        //loop through clubs and add players to ALLplayers
        response.forEach((club) => {
          club.players.forEach((player) => {
            player.club = club;
            this.ALLplayers.push(player);
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
    */
    this.leaderPlayerService.getPlayers().subscribe(
      (response: player[]) => {
        // loop trough players and add them to ALLplayers
        response.forEach((player) => {
          this.ALLplayers.push(player);
        });
      },
      (error) => {
        console.log(error);
      }
    );
    //sort ALLplayers by rankingPoints if they are not null
    this.ALLplayers.sort((a, b) => {
      if (a.rankingPoints == null || a.rankingPoints == null) {
        return 1;
      }
      if (b.rankingPoints == null) {
        return -1;
      }
      return b.rankingPoints - a.rankingPoints;
    });
    console.log(this.ALLplayers);

  }

}
