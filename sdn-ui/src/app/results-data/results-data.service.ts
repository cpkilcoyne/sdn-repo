import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsDataService {
  selectedPlayer: any = new Subject();
  player: any;
  team: any;
  constructor() { }

  getSelectedPlayer() {
    return this.player;
  }
  
  updateSelectedPlayer(player) {
    this.player = player;
  }

  getSelectedTeam() {
    return this.team;
  }
  
  updateSelectedTeam(team) {
    this.team = team;
  }
}

