import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  leagueButtonSelected: boolean = false;
  teamButtonSelected: boolean = false;
  playerButtonSelected: boolean = false;
  yearButtonSelected: boolean = false;
  statsButtonSelected: boolean = false;
  teams: any[];
  playersOnTeam: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=3548a8a6969d4e18895fee74f509f45a").subscribe((res: any[]) => {
      console.log(res);
      this.teams = res;
    })
  }

  toggleLeague() {
    console.log(this.leagueButtonSelected);
    this.leagueButtonSelected = !this.leagueButtonSelected;
    console.log(this.leagueButtonSelected);
  }

  toggleTeam() {
    console.log(this.teamButtonSelected);
    this.teamButtonSelected = !this.teamButtonSelected;
    if (this.teamButtonSelected) {
      this.http.get("https://api.sportsdata.io/v3/nfl/scores/json/Players/WAS?key=3548a8a6969d4e18895fee74f509f45a").subscribe((res: any[]) => {
        console.log(res);
        this.playersOnTeam = res;
      })
    }
    console.log(this.teamButtonSelected);
  }

  togglePlayer() {
    console.log(this.playerButtonSelected);
    this.playerButtonSelected = !this.playerButtonSelected;
    console.log(this.playerButtonSelected);
  }

  toggleYear() {
    console.log(this.yearButtonSelected);
    this.yearButtonSelected = !this.yearButtonSelected;
    console.log(this.yearButtonSelected);
  }

  toggleStats() {
    console.log(this.statsButtonSelected);
    this.statsButtonSelected = !this.statsButtonSelected;
    console.log(this.statsButtonSelected);
  }
  

}
