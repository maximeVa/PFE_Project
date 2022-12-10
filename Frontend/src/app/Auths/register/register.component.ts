import { Component } from '@angular/core';
import { NewUser } from '../models/NewUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: NewUser = new NewUser();
  constructor() { 
    console.log('RegisterComponent constructor');
    const user = {}  // user is a local variable
  }

  ngOnInit() {
    console.log('RegisterComponent ngOnInit');
  }

  register() {
    console.log('RegisterComponent register');
  }
}
