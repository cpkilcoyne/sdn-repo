import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  filteredOptions: any[] = [];
  trendingTopics: any[] = [];
  dateString = formatDate(Date.now(), 'yyyy-MMM-dd', 'en-US');
  finalDate: string;
  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.finalDate = this.dateString.toUpperCase();
    this.http.get("https://api.sportsdata.io/v3/nfl/scores/json/NewsByDate/" + this.finalDate + "?key=3548a8a6969d4e18895fee74f509f45a").subscribe((news: any[]) => {
      console.log(news);
      news.forEach(newsEntry => {
        this.trendingTopics.push("NFL - " + newsEntry.Title);
        this.trendingTopics.push(newsEntry.Team);
      })
    })
    this.http.get("https://api.sportsdata.io/v3/nba/scores/json/NewsByDate/" + this.finalDate + "?key=5477d3cec1ad404f92f286c592c74e2b").subscribe((news: any[]) => {
      console.log(news);
      news.forEach(newsEntry => {
        this.trendingTopics.push("NBA - " + newsEntry.Title);
        this.trendingTopics.push(newsEntry.Team);
      })
    })
    this.http.get("https://api.sportsdata.io/v3/mlb/scores/json/NewsByDate/" + this.finalDate + "?key=129b680aa0e34a54a7744861255cb244").subscribe((news: any[]) => {
      console.log(news);
      news.forEach(newsEntry => {
        this.trendingTopics.push("MLB - " + newsEntry.Title);
        this.trendingTopics.push(newsEntry.Team);
      })
    })
    this.http.get("https://api.sportsdata.io/v3/nhl/scores/json/NewsByDate/" + this.finalDate + "?key=73fc41256f84473abe92371336a6e2e2").subscribe((news: any[]) => {
      console.log(news);
      news.forEach(newsEntry => {
        this.trendingTopics.push("NHL - " + newsEntry.Title);
        this.trendingTopics.push(newsEntry.Team);
      })
    })


    // https://api.sportsdata.io/v3/nhl/scores/json/NewsByDate/%7Bdate%7D?key=73fc41256f84473abe92371336a6e2e2
    // https://api.sportsdata.io/v3/nba/scores/json/NewsByDate/%7Bdate%7D?key=5477d3cec1ad404f92f286c592c74e2b
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })

  oAuthRequest = 'grant_type=client_credentials';
  options = { headers: this.headers };
  
  searchQuery() {
    this.router.navigate(['results']);
  }

  navigateToNFL() {
    this.router.navigate(['results']);
  }
}
