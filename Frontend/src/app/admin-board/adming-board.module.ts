import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminBoardComponent } from './admin-board.component';
@NgModule({
    declarations: [
        AdminBoardComponent,
      ],
    // other properties here
    imports: [
      // other modules here
      HttpClientModule,
    ],
  })
  export class adminBoardModule {
    // module code here
  }