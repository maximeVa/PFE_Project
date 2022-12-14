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
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ArchivesComponent } from './archives/archives.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { ImportantLinksComponent } from './important-links/important-links.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'leaderboardPlayer', component: LeaderPlayerComponent},
  {path: 'competition', component: CompetitionComponent},
  {path: 'listPlayers', component: ListPlayersComponent},
  {path: 'listClubs', component: ListClubsComponent},

  {path: 'adminBoard', component: AdminBoardComponent},
  {path: 'gameRules', component: GameRulesComponent},
  {path: 'links', component: ImportantLinksComponent},
  {path: 'archives', component:ArchivesComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
