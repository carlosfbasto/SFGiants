import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Roster } from '../interfaces/roster.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RosterService {

  private rosterSubject = new BehaviorSubject<Roster | null>(null);
  roster$ = this.rosterSubject.asObservable();

  constructor(private api: ApiService) {
    this.loadRoster();
  }

  loadRoster() {
    this.api.get<Roster>('roster').subscribe((data) => {
      this.rosterSubject.next(data);
    });
  }

  getPlayerById(roster: Roster, id: number) {
    const allPlayers = [
      ...roster.pitchers,
      ...roster.catchers,
      ...roster.infielders,
      ...roster.outfielders
    ];
    return allPlayers.find(player => player.id === id);
  }
}