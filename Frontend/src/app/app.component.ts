import { AppComponentService } from './app.component.service';
import { Component, OnInit } from '@angular/core';
import { Competition } from './competitions/models/Competition';
import { HttpErrorResponse } from '@angular/common/http';
import { Division } from '../app/competitions/models/Division';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public allcompetitions: Division[] = [] ;

  constructor(private appComponentService: AppComponentService) { }
  ngOnInit() {
    this.getAllDivisions();
  }
  public getAllDivisions() {
    this.appComponentService.getAllDivisions().subscribe((competitionsData) =>{
      for (let index = 0; index < competitionsData.length; index++) {
        this.allcompetitions.push(competitionsData[index]);
      }
    },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
