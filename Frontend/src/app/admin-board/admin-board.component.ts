import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  
})
export class AdminBoardComponent implements OnInit {
  admins: any[] =[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://kickervinci.azurewebsites.net/admin')
  .subscribe((data: Object) => {
    this.admins = data as any[];
  });

  
  
  
  }
}
