import {AfterViewInit, Component, ViewChild, Input, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResultsDataService } from '../results-data/results-data.service';

export interface Player {
  Active: boolean;
  Age: number;
  AverageDraftPosition: number;
  BirthDate: string;
  BirthDateString: string;
  ByeWeek: number;
  College: string;
  CollegeDraftPick: number;
  CollegeDraftRound: number;
  CollegeDraftTeam: string;
  CollegeDraftYear: number;
  CurrentStatus: string;
  CurrentTeam: string;
  DeclaredInactive: boolean;
  DepthDisplayOrder: number;
  DepthOrder: number;
  DepthPosition: string;
  DepthPositionCategory: string;
  DraftKingsName: string;
  DraftKingsPlayerID: number;
  Experience: number;
  ExperienceString: string;
  FanDuelName: string;
  FanDuelPlayerID: number;
  FantasyAlarmPlayerID: number;
  FantasyDraftName: string;
  FantasyDraftPlayerID: number;
  FantasyPosition: string;
  FantasyPositionDepthOrder: number;
  FirstName: string;
  GlobalTeamID: number;
  Height: string;
  HeightFeet: number;
  HeightInches: number;
  InjuryBodyPart: string;
  InjuryNotes: string;
  InjuryPractice: string;
  InjuryPracticeDescription: string;
  InjuryStartDate: string;
  InjuryStatus: string;
  IsUndraftedFreeAgent: boolean;
  LastName: string;
  LatestNews: any[];
  Name: string;
  Number: number;
  PhotoUrl: string;
  PlayerID: number;
  PlayerSeason: number;
  Position: string;
  PositionCategory: string;
  RotoWirePlayerID: number;
  RotoworldPlayerID: number;
  ShortName: string;
  SportRadarPlayerID: string;
  SportsDirectPlayerID: number;
  StatsPlayerID: number;
  Status: string;
  Team: string;
  TeamID: number
  UpcomingDraftKingsSalary: string;
  UpcomingFanDuelSalary: string;
  UpcomingGameOpponent: string;
  UpcomingGameWeek: number;
  UpcomingOpponentPositionRank: number;
  UpcomingOpponentRank: number;
  UpcomingSalary: string;
  UpcomingYahooSalary: string;
  UsaTodayHeadshotNoBackgroundUpdated: string;
  UsaTodayHeadshotNoBackgroundUrl: string;
  UsaTodayHeadshotUpdated: string;
  UsaTodayHeadshotUrl: string;
  UsaTodayPlayerID: number;
  Weight: number;
  XmlTeamPlayerID: number;
  YahooName: string;
  YahooPlayerID: number;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  @Input() inheritedDataSource;
  // displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumns: string[] = ['FirstName', 'LastName', 'Team', 'Position'];
  // dataSource: MatTableDataSource<Team>;
  dataSource: MatTableDataSource<Player>;
  // dataSource: MatTableDataSource<UserData>;
  private paginator: MatPaginator;
  private sort: MatSort;
  viewStatus: string = "";


  playerColumnArray: PlayerColumn[] =  [
    {value: 'Position', title: 'Position'},
    {value: 'FirstName', title: 'First Name'},
    {value: 'LastName', title: 'Last Name'},
    {value: 'Team', title: 'Team'}
  ]


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

export interface PlayerColumn {
  value?: string,
  title?: string
}