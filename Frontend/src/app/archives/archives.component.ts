import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
  
})
export class ArchivesComponent implements OnInit {
  games: any[] =[];

  constructor(private http: HttpClient) {}

  ngOnInit() {;
    this.http.get('https://kickervinci.azurewebsites.net/games')
  .subscribe((data: Object) => {
    this.games = data as any[];
  });

  
  
  
  }
}
