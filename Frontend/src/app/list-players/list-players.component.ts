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
  public playersWithoutClub : player[] = [];

  constructor(private listPlayersService: ListPlayersService) { }
  ngOnInit() {
    this.listPlayersService.getClubs().subscribe(
      (response: club[]) => {
        this.clubs = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.listPlayersService.getPlayers().subscribe(
      (response: player[]) => {
        console.log(response);
        this.playersWithoutClub = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
