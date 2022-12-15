import { Component , OnInit } from '@angular/core';
import { ListPlayersService } from './list-players.service';
import { club } from './models/club';
import { player } from './models/player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit{
  public clubs : club[] = [];
  public ALLplayers: player[] = [] ;
  public playersWithoutClub : player[] = [];

  constructor(private listPlayersService: ListPlayersService) { }
  ngOnInit() {
    this.listPlayersService.getClubs().subscribe(
      (response: club[]) => {
        this.clubs = response;
        //loop through clubs and add players to ALLplayers
        this.clubs.forEach((club) => {
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

}
