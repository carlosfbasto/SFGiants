import { Component, OnDestroy, OnInit } from '@angular/core';
import { Carousel } from 'src/app/pages/interfaces/carousel.interface';
import { ApiService } from 'src/app/pages/services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit, OnDestroy {

  data: Carousel[]=[];

  currentIndex = 0;
  intervalId: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get<Carousel[]>('carousel').subscribe(resp => {
      this.data = resp;
      if (this.data.length > 0) {
        this.startCarousel();
      }
    });
  }

  startCarousel(): void {
      this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) %
      this.data.length;
    },6000)
    }

  ngOnDestroy(): void {
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
