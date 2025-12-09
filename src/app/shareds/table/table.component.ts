import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Player } from 'src/app/pages/interfaces/player.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnChanges {

  selectedSection: 'actives' | 'managers' = 'actives';

  fallbackImage = 'assets/img/roster/roster.svg'

  @Input() item: Player[]= [];

  pitchers: Player[] = [];
  catchers: Player[] = [];
  infielders: Player[] = [];
  outfielders: Player[] = [];
  managers: Player[] = [];


  ngOnChanges (changes: SimpleChanges): void {

    if (changes['item'] && this.item) {
      this.pitchers = this.item.filter(p => p.role === 'pitcher');
      this.catchers = this.item.filter(p => p.role === 'catcher');
      this.infielders = this.item.filter(p => p.role === 'infielder');
      this.outfielders = this.item.filter(p => p.role === 'outfielder');
      this.managers = this.item.filter(p => p.role === 'manager')
    }
  }

  changeSection(section: 'actives' | 'managers') {
    this.selectedSection = section;
  }

  get playerImg(): string {
  return this.playerImg || this.fallbackImage ;
}

  
}
