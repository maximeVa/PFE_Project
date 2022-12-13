import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Abouts/about/about.component';
import { LoginComponent } from './Auths/login/login.component';
import { RegisterComponent } from './Auths/register/register.component';
import { HomepageComponent } from './Homes/homepage/homepage.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LeaderPlayerComponent } from './leader-player/leader-player.component';
import { CompetitionComponent } from './competition/competition.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    LeaderPlayerComponent,
    CompetitionComponent,
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
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
