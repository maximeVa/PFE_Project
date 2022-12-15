import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ArchivesService {
  games: any[] = [];

  constructor(private http: HttpClient) {
  }

  getArchives(): Observable<any> {
    return this.http.get('https://kickervinci.azurewebsites.net/games')
  }
}
