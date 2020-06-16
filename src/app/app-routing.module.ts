import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'

import { LoginComponent } from './login/login.component';
import { TrouverBusComponent } from './trouver-bus/trouver-bus.component'
import { TrouverLigneComponent } from './trouver-ligne/trouver-ligne.component';
import { TrouverDestinationComponent } from './trouver-destination/trouver-destination.component'
import { ErrorPageComponent } from './error-page/error-page.component';
import { TrouverHeureDepartComponent } from './trouver-heure-depart/trouver-heure-depart.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'allBuses', component: TrouverBusComponent, canActivate: [AuthGuard] },
  { path: 'allLines', component: TrouverLigneComponent, canActivate: [AuthGuard] },
  { path: 'allDestinations', component: TrouverDestinationComponent, canActivate: [AuthGuard] },
  { path: 'allDepartureTimes', component: TrouverHeureDepartComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
