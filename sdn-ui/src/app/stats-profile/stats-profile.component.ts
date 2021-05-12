import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsDataService } from '../results-data/results-data.service';

@Component({
  selector: 'app-stats-profile',
  templateUrl: './stats-profile.component.html',
  styleUrls: ['./stats-profile.component.css']
})
export class StatsProfileComponent implements OnInit {
  player: any;
  constructor(private http: HttpClient, private resultsDataService: ResultsDataService) { }

  ngOnInit(): void {
    this.player = this.resultsDataService.getSelectedPlayer();
    this.http.get("https://api.sportsdata.io/v3/nfl/scores/json/Players/22403?key=3548a8a6969d4e18895fee74f509f45a").subscribe(response => {
      console.log(response);
    })
  
}
}
