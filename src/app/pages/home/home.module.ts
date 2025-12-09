import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'src/app/shareds/carousel/carousel.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    CommonModule,
    CarouselModule
  ]

})
export class HomeModule { }
