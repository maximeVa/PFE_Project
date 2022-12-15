import { Component } from '@angular/core';
import { StorageService } from './Auths/storage.service';
import { AuthService } from './Auths/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //private roles: string[] = [];
  isLoggedIn = false;
  //showAdminBoard = false;
  //showModeratorBoard = false;
  email?: string;

  constructor(private storageService: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      //:this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.email = user.email;
      console.log( this.email)
    }
  }

  logout(): void {
      this.storageService.clean();
      window.location.reload();
    }
}