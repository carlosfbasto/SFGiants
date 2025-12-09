import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from '../../interfaces/player.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {

  player?: Player | undefined;

  selectedAction: 'batting' | 'pitching' = 'batting';

  fallbackImage = 'https://i0.wp.com/thehappening.com/wp-content/uploads/2020/08/baseball-e1596652734479.jpg?fit=1480%2C754&ssl=1';

  constructor(private route: ActivatedRoute,
    private API: ApiService,
  ) {}

  ngOnInit(): void {
    const playerId = Number(this.route.snapshot.paramMap.get('id'));

    this.API.get<Player[]>('roster').subscribe(player => {
      this.player = player.find(p => p.id === playerId);
    });
  }
  
  get playerBackground(): string {
  return this.player?.personalInfo.photoUrl || this.fallbackImage ;
}

changeAction(action: 'batting' | 'pitching') {
    this.selectedAction = action;
  }

  goToFacebook() {
    const url = this.player?.personalInfo.social?.facebook
  if (url) {
    window.open(url, '_blank');
  }
}

}

  

