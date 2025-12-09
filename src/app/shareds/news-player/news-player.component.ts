import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/pages/interfaces/player.interface';

@Component({
  selector: 'news-player',
  templateUrl: './news-player.component.html',
  styleUrls: ['./news-player.component.sass']
})
export class NewsPlayerComponent implements OnInit {

  @Input() player! : Player;

  constructor() { }

  ngOnInit(): void {
  }

}
