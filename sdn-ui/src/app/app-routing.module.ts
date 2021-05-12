import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsProfileComponent } from './stats-profile/stats-profile.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'player-stats', component: StatsProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
