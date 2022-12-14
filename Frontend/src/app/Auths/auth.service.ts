import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

const BASE_URL = environment.apiBaseUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      BASE_URL + '/authentication/connect',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(firstname: string, lastname: string, email: string, password: string, birthDate: Date): Observable<any> {
    return this.http.post(
      BASE_URL + "user",
      {
        email,
        password,
        birthDate,
        firstname,
        lastname,
      },
      httpOptions
    );
  }

  //encore à check
  logout(): Observable<any> {
    return this.http.post(BASE_URL + 'signout', { }, httpOptions);
  }
}
