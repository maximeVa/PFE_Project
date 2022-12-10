import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cup',
  templateUrl: './cup.component.html',
  styleUrls: ['./cup.component.css']
})
export class CupComponent implements OnInit {

  // Declare a property to hold the data from the backend
  tournamentData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make a GET request to the backend to retrieve the data
    this.http.get('http://your-backend-server.com/api/tournament-data')
      .subscribe(data => {
        // When the data is returned, store it in the tournamentData property
        this.tournamentData = data;
      });
  }
}
