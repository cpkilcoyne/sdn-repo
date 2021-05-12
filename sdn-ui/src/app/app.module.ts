import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ResultsComponent } from './results/results.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FilterComponent } from './filter/filter.component';
import {MatCardModule} from '@angular/material/card';
import { ResultsDataComponent } from './results-data/results-data.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { StatsProfileComponent } from './stats-profile/stats-profile.component';
import { TeamsTableComponent } from './teams-table/teams-table.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatSortModule } from '@angular/material/sort';
import { PlayersTableComponent } from './players-table/players-table.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ResultsComponent,
    LandingPageComponent,
    FilterComponent,
    ResultsDataComponent,
    ProfileComponent,
    StatsProfileComponent,
    TeamsTableComponent,
    TeamProfileComponent,
    LoginComponent,
    PlayersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule,
    FontAwesomeModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    AngularFireAuthModule,
    MatSortModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
