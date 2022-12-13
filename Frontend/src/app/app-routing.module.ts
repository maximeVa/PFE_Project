import { LeaderPlayerComponent } from './leader-player/leader-player.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Abouts/about/about.component';
import { LoginComponent } from './Auths/login/login.component';
import { RegisterComponent } from './Auths/register/register.component';
import { HomepageComponent } from './Homes/homepage/homepage.component';
import { CompetitionComponent } from './competition/competition.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { ListClubsComponent } from './list-clubs/list-clubs.component';
import { GameRecapsComponent } from './game-recaps/game-recaps.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'leaderboardPlayer', component: LeaderPlayerComponent},
  {path: 'competition', component: CompetitionComponent},
  {path: 'listPlayers', component: ListPlayersComponent},
  {path: 'listClubs', component: ListClubsComponent},
  // a retirer apres car c'est juste pour tester la page GameRecaps
  {path: 'gameRecaps', component: GameRecapsComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
