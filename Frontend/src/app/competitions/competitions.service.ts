import { Competition } from './Competition';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  private AUTH_API = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getCompetitions(): Observable<Competition> {
    return this.http.get<Competition>(`${this.AUTH_API}divisions/div1`);
  }

}
