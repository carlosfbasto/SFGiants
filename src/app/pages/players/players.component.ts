import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Player } from '../interfaces/player.interface';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent {

  data: Player [] = [];

constructor(private API: ApiService,
) {

  this.API.get<Player[]>('roster').subscribe((data) => {
        this.data = data;
      });
}

  

}
