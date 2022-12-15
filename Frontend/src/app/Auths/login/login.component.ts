import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  //roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log(email, password);
    this.authService.login(email, password).subscribe({
      next: data => {

        this.storageService.saveUser(data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
       // this.roles = this.storageService.getUser().roles;
       //ne devrait pas redirect vers page d'accueil ??
        this.reloadPage();
      },
      error: err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    //.then pour refresh la page car au sinon non, la navbar ne s'adapte pas au changement de status -> connecté
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
  }
 
}
