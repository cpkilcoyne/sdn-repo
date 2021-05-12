import { Component, OnInit } from '@angular/core';
import { ResultsDataService } from '../results-data/results-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.css']
})
export class TeamProfileComponent implements OnInit {
  team: any;
  selectedTeamName;
  selectedTeam: any[];
  constructor(private http: HttpClient, private resultsDataService: ResultsDataService) { }
  selected: string = '2020';
  ngOnInit(): void {
    this.team = this.resultsDataService.getSelectedTeam();
    
    this.http.get('https://api.sportsdata.io/v3/nfl/scores/json/TeamGameStats/2020/1?key=3548a8a6969d4e18895fee74f509f45a').subscribe((response: any[]) => {
      console.log(response);
      this.selectedTeam = response.find(element => (element.Team === this.team.Key))
    })
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}

interface Food {
  value: string;
  viewValue: string;
}
