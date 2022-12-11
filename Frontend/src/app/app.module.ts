import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Abouts/about/about.component';
import { LoginComponent } from './Auths/login/login.component';
import { RegisterComponent } from './Auths/register/register.component';
import { HomepageComponent } from './Homes/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { ListPlayersComponent } from './list-players/list-players.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ListPlayersComponent,
    ListClubsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
