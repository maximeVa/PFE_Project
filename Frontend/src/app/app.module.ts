import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { ImportantLinksComponent } from './important-links/important-links.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { FederationRulesComponent } from './federation-rules/federation-rules.component';
import { ArchivesComponent } from './archives/archives.component';
import { CupComponent } from './cup/cup.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminBoardComponent,
    ImportantLinksComponent,
    GameRulesComponent,
    FederationRulesComponent,
    ArchivesComponent,
    CupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
