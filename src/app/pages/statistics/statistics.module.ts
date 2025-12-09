import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: StatisticsComponent }]),
    CommonModule,
    FormsModule
  ]
})
export class StatisticsModule { }
