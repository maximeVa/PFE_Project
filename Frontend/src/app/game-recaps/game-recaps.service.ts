import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const BASE_URL = environment.apiBaseUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class GameRecapsService {

  constructor(private http: HttpClient) {}

  public getGameRecaps(id:number): Observable<any> {
    return this.http.get<any>(BASE_URL + 'gameRecap/' + id);
  }
  /*
  public getCompetitions(division:String): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.AUTH_API}divisions/`+division);
  }
  */

}
