import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayersComponent } from './players.component';
import { TableModule } from 'src/app/shareds/table/table.module';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { NewsPlayerModule } from 'src/app/shareds/news-player/news-player.module';



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: PlayersComponent },
      { path: ':id/:name', component: PlayerDetailComponent }
    ]),
    CommonModule,
    TableModule,
    NewsPlayerModule
  ]
})
export class PlayersModule { }
