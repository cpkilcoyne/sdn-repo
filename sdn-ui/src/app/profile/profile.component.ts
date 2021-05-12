import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  typesOfShoes: string[] = ['Aaron Rodgers 2019 QBR', 'Washington Football Team Roster', 'Seattle Seahawks D/ST Efficiency', 'Patrick Mahomes QBR', 'NFL Rushing Leaders'];
  ngOnInit(): void {
  }

}
