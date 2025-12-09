import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { News } from '../interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  data: News[] = [];
  filteredData: News[] = [];
  selectedNews: News | null = null;
  selectedDate: string | null = null; // yyyy-MM-dd para comparar

  constructor(private Api: ApiService) { }

  ngOnInit(): void {
    this.Api.get<News[]>('news').subscribe((data) => {
      this.data = data.map(item => {
        if (typeof item.date === 'string') {
          const parts = item.date.trim().split('-').map(Number);
          if (parts.length === 3) {
            const [day, month, year] = parts;
            return { ...item, date: new Date(year, month - 1, day) };
          }
        }
        // En caso de formato inesperado, usar fecha actual
        return { ...item, date: new Date() };
      });

      this.filteredData = [...this.data];

      if (this.filteredData.length > 0) {
        this.selectedNews = this.filteredData[0];
      }
    });
  }

  onDateChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedDate = input.value; // yyyy-MM-dd

    if (!this.selectedDate) {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(item => {
        const itemDate = item.date as Date;
        const itemDateStr = itemDate.toISOString().split('T')[0]; // yyyy-MM-dd
        return itemDateStr === this.selectedDate;
      });
    }

    if (this.filteredData.length > 0) {
      this.selectedNews = this.filteredData[0];
    } else {
      this.selectedNews = null;
    }
  }

  selectNews(item: News) {
    this.selectedNews = item;
  }

}
