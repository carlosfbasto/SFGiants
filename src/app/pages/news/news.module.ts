import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'src/app/shareds/carousel/carousel.module';



@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: NewsComponent }]),
    CommonModule,
    CarouselModule
  ]
})
export class NewsModule { }
