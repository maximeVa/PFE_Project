import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { club } from './models/club';
import { player } from './models/player';

const BASE_URL = environment.apiBaseUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ListPlayersService {
  constructor(private http: HttpClient) {}

  public getClubs(): Observable<club[]> {
    return this.http.get<club[]>(BASE_URL + 'clubs');
  }

  public getPlayers(): Observable<player[]> {
    return this.http.get<player[]>(BASE_URL + 'usersWithoutClub');
  }


}
