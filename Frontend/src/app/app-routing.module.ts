import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ArchivesComponent } from './archives/archives.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { ImportantLinksComponent } from './important-links/important-links.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
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
