import {Component, OnInit} from '@angular/core';
import {ListPlayersService} from './list-players.service';
import {club} from './models/club';
import {player} from './models/player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit {
  public clubs: club[] = [];
  public ALLplayers: player[] = [];
  public ALLplayersCopy: player[] = this.ALLplayers;
  public ALLplayersCopy3: player[] = this.ALLplayers;

  constructor(private listPlayersService: ListPlayersService) {
  }

  ngOnInit() {
    this.listPlayersService.getClubs().subscribe(
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

    this.listPlayersService.getPlayers().subscribe(
      (response: player[]) => {
        // loop trough players and add them to ALLplayers
        response.forEach((player) => {
          this.ALLplayers.push(player);
        });
        console.log(this.ALLplayers);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sortBy(value: string): void {
    let table = this.ALLplayersCopy
    if (value === "rang") {
      this.ALLplayers = table.sort((a, b) => a.rankingPoints - b.rankingPoints).reverse()
    } else if (value === "division1A") {
      this.ALLplayers = table.filter((data) => data?.club?.division?.name === "1A")
    } else if (value === "division2A") {
      this.ALLplayers = table.filter((data) => data?.club?.division?.name === "2A")
    } else if (value === "null") {
      this.ALLplayers = this.ALLplayersCopy3
    }

  }

}
