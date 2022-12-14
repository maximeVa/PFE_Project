import { AppComponentService } from './app.component.service';
import { Component, OnInit } from '@angular/core';
import { Competition } from './competitions/models/Competition';
import { HttpErrorResponse } from '@angular/common/http';
import { Division } from '../app/competitions/models/Division';
import { StorageService } from './Auths/storage.service';
import { AuthService } from './Auths/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  public allcompetitions: Division[] = [] ;
    //private roles: string[] = [];
    isLoggedIn = false;
    //showAdminBoard = false;
    //showModeratorBoard = false;
    email?: string;
  constructor(private storageService: StorageService, private authService: AuthService,private appComponentService: AppComponentService) { }
  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      //:this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.email = user.email;
      console.log( this.email)
    }
    this.getAllDivisions();
  }
  logout(): void {
    this.storageService.clean();
    window.location.reload();
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
