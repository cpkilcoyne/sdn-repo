
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from '../auth.service';
// import { mini } from './mini';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentPath: string;
  toggle = true;
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

  toggleSidebar() {
    if (this.toggle) {
      document.getElementById("mySidebar").style.width = "235px";
      // document.getElementById("main").style.marginLeft = "250px";
      this.toggle = false;
    } else {
      document.getElementById("mySidebar").style.width = "85px";
      // document.getElementById("main").style.marginLeft = "85px";
      this.toggle = true;
    }
  }

  navigateToHomePage() {
    this.router.navigate(['']);
  }

}
