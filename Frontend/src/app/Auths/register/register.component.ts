import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    birthDate: null,
    rankingPoints: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { firstname, lastname, email, password, birthDate } =
      this.form;
    //console.log(firstname, lastname, email, password, birthDate );
    // 0 is the rankingPoints because it is a new user
    this.authService
      .register(firstname, lastname, email, password, birthDate)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
  }
}
