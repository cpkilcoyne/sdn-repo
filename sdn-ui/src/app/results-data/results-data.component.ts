import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ResultsDataService } from './results-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-data',
  templateUrl: './results-data.component.html',
  styleUrls: ['./results-data.component.css']
})
export class ResultsDataComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName', 'Team', 'Position'];
  displayedTeamsColumns: string[] = ['WikipediaLogoUrl', 'Key', 'YahooName'];
  selectedFilter: string = 'teams';
  allPlayers: any[];
  loaded: boolean = false;
  filteredOptions: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any[] = [];
  teamsDataSource: any[] = [];
  totalData: any[] = [];
  resultsLength: number = 0;
  viewStatus: string;
  selectedPlayer: any;
  activeTeams: any[];
  
  constructor(private router: Router, private http: HttpClient, private resultsDataService: ResultsDataService) { }


  playerColumnArray: PlayerColumn[] =  [
    {value: 'Position', title: 'Position'},
    {value: 'FirstName', title: 'First Name'},
    {value: 'LastName', title: 'Last Name'},
    {value: 'Team', title: 'Team'}
  ]

  // teamsColumnArray: TeamColumn[] = [
  //   {value: 'WikipediaLogoUrl', title: 'Logo'},
  //   {value: 'YahooName', title: 'Name'}
  // ];

  ngOnInit(): void {
    this.http.get('https://api.sportsdata.io/v3/nfl/scores/json/Teams?key=3548a8a6969d4e18895fee74f509f45a').subscribe((teams: any[]) => {
      this.teamsDataSource = teams;
      this.loaded = true;
    })
    this.http.get("https://api.sportsdata.io/v3/nfl/scores/json/Players/WAS?key=3548a8a6969d4e18895fee74f509f45a").subscribe((res: any[]) => {
      this.dataSource = res;
      console.log(res);
      this.viewStatus = "list";
      this.resultsLength = res.length;
      // this.loaded = true;
    })

  }

  backToList() {
    this.viewStatus = "list";
  }

  backToLandingPage() {
    this.router.navigate(['']);
  }

  onTeamsClick() {
    this.selectedFilter = 'teams';
  }

  onPlayerClick() {
    this.selectedFilter = 'players';
  }
  
onRowClick(player) {
  this.viewStatus = "profile";
  this.resultsDataService.updateSelectedPlayer(player);
}

onTeamsRowClick(team) {
  this.viewStatus = "team-profile";
  this.resultsDataService.updateSelectedTeam(team);

}
  
returnElementValue(element, column) {
  let valueToReturn;
  let elementPropertyKeys = Object.keys(element);
  elementPropertyKeys.forEach(key => {
    if (key === column.value) { 
      valueToReturn = element[key];
    }
  });
  return valueToReturn;
}

}



export interface PlayerColumn {
  value?: string,
  title?: string
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Player {
  PlayerID: number;
  Position: string;
  Team: string;
  FirstName: string;
  LastName: string;
}

const ELEMENT_DATA: Player[] = [
  {PlayerID: 1232544, Position: "DE", FirstName: "Chase", LastName: "Young", Team: "WAS" },
];