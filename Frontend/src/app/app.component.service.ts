import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Competition } from './competitions/models/Competition';
import { Division } from './competitions/models/Division';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  private AUTH_API = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getAllDivisions(): Observable<Division[]> {
    return this.http.get<Division[]>(`${this.AUTH_API}divisions`);
  }
}
