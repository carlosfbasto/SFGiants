import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {

  selectedAction: 'batting' | 'pitching' = 'batting';
  selectedPosition: string = '';
  data: Player[] = [];

  constructor(private API: ApiService) {}

  ngOnInit(): void {
    // Recuperar del localStorage
    const savedAction = localStorage.getItem('selectedAction') as 'batting' | 'pitching';
    const savedPosition = localStorage.getItem('selectedPosition');

    if (savedAction) {
      this.selectedAction = savedAction;
    }
    if (savedPosition !== null) {
      this.selectedPosition = savedPosition;
    }

    // Obtener los datos de la API
    this.API.get<Player[]>('roster').subscribe((data) => {
      this.data = data;
    });
  }

  changeAction(action: 'batting' | 'pitching') {
    this.selectedAction = action;
    this.selectedPosition = '';
    localStorage.setItem('selectedAction', action);
  }

  get positions(): string[] {
    return [
      ...new Set(
        this.data
          .filter(player => {
            if (this.selectedAction === 'batting') {
              return player.role !== 'pitcher' && player.role !== 'manager';
            }
            if (this.selectedAction === 'pitching') {
              return player.role === 'pitcher';
            }
            return true;
          })
          .map(p => p.position)
      )
    ];
  }

  get filteredData(): Player[] {
    return this.data
      .filter(player => {
        // Filtrar por tipo de tabla
        if (player.role === 'manager') return false;

        if (this.selectedAction === 'batting' && player.role === 'pitcher') return false;
        if (this.selectedAction === 'pitching' && player.role !== 'pitcher') return false;

        return true;
      })
      .filter(player => {
        // Filtrar por posición si hay una seleccionada
        if (!this.selectedPosition) return true;
        return player.position === this.selectedPosition;
      });
  }

  onPositionChange(position: string) {
    this.selectedPosition = position;
  }

}
