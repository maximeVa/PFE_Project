import { Component } from '@angular/core';
import { ListClubsService } from './list-clubs.service';

@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrls: ['./list-clubs.component.scss']
})
export class ListClubsComponent {
  public clubs : any[] = []; 
  
  constructor(private listClubsService: ListClubsService) { }
  ngOnInit() {
    this.listClubsService.getClubs().subscribe(
      (response: any[]) => {
        this.clubs = response;
        this.clubs.sort((a, b) => (a.division.id > b.division.id) ? 1 : -1);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
