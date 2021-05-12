import {AfterViewInit, Component, ViewChild, Input, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResultsDataService } from '../results-data/results-data.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface Team {
  AverageDraftPosition: number;
  AverageDraftPosition2QB: number;
  AverageDraftPositionDynasty: number;
  AverageDraftPositionPPR: number;
  ByeWeek: number;
  City: string;
  Conference: string;
  DefensiveCoordinator: string;
  DefensiveScheme: string;
  Division: string;
  DraftKingsName: string;
  DraftKingsPlayerID: number;
  FanDuelName: string;
  FanDuelPlayerID: number;
  FantasyDraftName: string;
  FantasyDraftPlayerID: number;
  FullName: string;
  GlobalTeamID: number;
  HeadCoach: string;
  Key: string;
  Name: string;
  OffensiveCoordinator: string;
  OffensiveScheme: string;
  PlayerID: number;
  PrimaryColor: string;
  QuaternaryColor: string;
  SecondaryColor: string;
  SpecialTeamsCoach: string;
  StadiumDetails: StadiumDetails;
  StadiumID: number;
  TeamID: number;
  TertiaryColor: string;
  UpcomingDraftKingsSalary: number;
  UpcomingFanDuelSalary: number;
  UpcomingOpponent: string;
  UpcomingOpponentPositionRank: number;
  UpcomingOpponentRank: number;
  UpcomingSalary: number;
  UpcomingYahooSalary: number;
  WikipediaLogoUrl: string;
  WikipediaWordMarkUrl: string;
  YahooName: string;
  YahooPlayerID: number;

}

export interface StadiumDetails {
  Capacity: number;
  City: string;
  Country: string;
  GeoLat: number;
  GeoLong: number;
  Name: string;
  PlayingSurface: string;
  StadiumID: number;
  State: string;
  Type: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  @Input() inheritedDataSource;
  // displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumns: string[] = ['WikipediaLogoUrl', 'Key', 'YahooName'];
  teamsDataSource: MatTableDataSource<Team>;
  dataSource: MatTableDataSource<UserData>;
  private paginator: MatPaginator;
  private sort: MatSort;
  viewStatus: string = "";


  constructor(private resultsDataService: ResultsDataService) {
    // Create 100 users

    // Assign the data to the data source for the table to render
  }

  ngOnInit() {
    console.log(this.inheritedDataSource);
    this.dataSource = new MatTableDataSource(this.inheritedDataSource);
  }

  onTeamsRowClick(team) {
    this.viewStatus = "team-profile";
    this.resultsDataService.updateSelectedTeam(team);
  
  }


  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}