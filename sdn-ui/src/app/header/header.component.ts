import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

  loginClick() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logUserIn(email, password) {
    this.auth.signUserIn(email, password).subscribe(response => {
      console.log(response);
    })
  }

  navigateToUserProfile() {
    this.router.navigate(["profile"])
  }

  navigateToHomePage() {
    this.router.navigate(['']);
  }

  searchQuery() {
    this.router.navigate(['results']);
  }

}
