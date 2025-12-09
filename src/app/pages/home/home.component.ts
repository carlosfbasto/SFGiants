import { Component, OnInit } from '@angular/core';

import { Headlines } from '../interfaces/headlines.interface';
import { VideoNews } from '../interfaces/video.interface';
import { Matche } from '../interfaces/matche.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data: VideoNews[] =[]

  headlines: Headlines[] = []

  matches: Matche[] = [];

  months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  daysWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  startDate: Date = new Date();
  currentIndex = 0;
  
  matchOfTheDay: Matche | null = null;
  formattedDate: string = '';

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get<Matche[]>('matches').subscribe((data) => {
      this.matches = data;
      this.updateDate();
    });

    this.apiService.get<VideoNews[]>('video').subscribe((data) => {
      this.data = data;
    });

    this.apiService.get<Headlines[]>('headlines').subscribe((data) => {
      this.headlines = data;
    })
  }

  formatDate(date: Date): string {
    return `${this.daysWeek[date.getDay()]} ${date.getDate()} ${this.months[date.getMonth()]}`;
  }

  getDate(index: number): Date {
    const date = new Date(this.startDate);
    date.setDate(this.startDate.getDate() + index);
    return date;
  }

  updateDate(): void {
    const date = this.getDate(this.currentIndex);
    this.formattedDate = this.formatDate(date);
    const clave = date.toISOString().split('T')[0];

    this.matchOfTheDay = this.matches.find(p => p.date === clave) || null;
  }

  next(): void {
    this.currentIndex++;
    this.updateDate();
  }

  previous(): void {
    this.currentIndex--;
    this.updateDate();
  }
}

