import { Competition } from './models/Competition';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';
import { Game } from './models/Game';
import { GameRecap } from './models/GameRecap';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  private AUTH_API = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getCompetitions(division:String): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.AUTH_API}divisions/`+division);
  }
  public getGameRecap(): Observable<GameRecap[]> {
    return this.http.get<GameRecap[]>(`${this.AUTH_API}gameRecaps`);
  }

}
