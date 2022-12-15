import {Component, OnInit} from '@angular/core';
import {ArchivesService} from "./archives.service";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']

})
export class ArchivesComponent implements OnInit {
  games: any[] = [];
  gamesArray: any[] = [];
  division: any[] = [];
  coupe: any[] = [];
  club: any[] = [];
  competition: any[] = [];

  constructor(private archivesService: ArchivesService) {
  }

  ngOnInit(): void {
    this.sortBy("")
  }

  sortBy(value: string): void {
    this.archivesService.getArchives()
    .subscribe(archives => this.gamesArray = archives);
    this.games = [];
    if (value === "coupe") {
      this.gamesArray.forEach((data) => {
        if (data.cup != null) {
          this.coupe.push(data.cup.name);
        }
      })
      this.coupe.forEach((coupe) => {
        this.gamesArray.forEach((data) => {
          if (data.cup != null && data.cup.name === coupe) {
            this.games.push(data);
          }
        })
      })
      this.games = [...new Set(this.games)];
    } else if (value === "competition") {
      this.gamesArray.forEach((data) => {
        this.competition.push(data.competition.date);
      })
      this.competition.forEach((competition) => {
        this.gamesArray.forEach((data) => {
          if (data.competition.date === competition) {
            this.games.push(data);
          }
        })
      })
      this.games = [...new Set(this.games)];
    } else if (value === "club") {
      this.gamesArray.forEach((data) => {
        this.club.push(data.guestClub.name);
      })
      this.club.forEach((club) => {
        this.gamesArray.forEach((data) => {
          if (data.guestClub.name === club) {
            this.games.push(data);
          }
        })
      })
      this.games = [...new Set(this.games)];
    } else if (value === "division") {
      this.archivesService.getArchives()
      .subscribe(archives => this.gamesArray = archives);
      this.gamesArray.forEach((data) => {
        this.division.push(data.guestClub.division.name);
      })
      this.division.forEach((division) => {
        this.gamesArray.forEach((data) => {
          if (data.guestClub.division.name === division) {
            this.games.push(data);
          }
        })
      })
      this.games = [...new Set(this.games)];
    } else {
      this.archivesService.getArchives()
      .subscribe(archives => this.games = archives);
    }
  }
}
