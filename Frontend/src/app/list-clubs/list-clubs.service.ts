import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

const BASE_URL = environment.apiBaseUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ListClubsService {
  constructor(private http: HttpClient) {}

  public getClubs(): Observable<any[]> {
    return this.http.get<any[]>(BASE_URL + 'clubs');
  }

}
