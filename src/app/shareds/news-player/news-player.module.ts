import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsPlayerComponent } from './news-player.component';



@NgModule({
  declarations: [
    NewsPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsPlayerComponent]
})
export class NewsPlayerModule { }
