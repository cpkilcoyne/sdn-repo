
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentPath: string;
  constructor(private auth: AuthService, private router: Router, public dialog: MatDialog) {
    this.router.events.subscribe((response: any) => {
      if (response instanceof NavigationEnd) {
        this.currentPath = response.url;
      }
    })
   }

  ngOnInit(): void {
  }

  logUserIn(email, password) {
    this.auth.signUserIn(email, password).subscribe(response => {
      console.log(response);
    })
  }

  testIn() {
    this.router.navigate(['']);
  }

  testOut() {
    this.router.navigate(['']);
  }

  navigateToHomePage() {
    this.router.navigate(['']);
  }

}
