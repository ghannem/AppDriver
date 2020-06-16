import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrouverBusComponent } from './trouver-bus/trouver-bus.component';
import { TrouverLigneComponent } from './trouver-ligne/trouver-ligne.component';

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingAnimationComponent } from './loading-animation/loading-animation.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TrouverDestinationComponent } from './trouver-destination/trouver-destination.component';
import { TrouverHeureDepartComponent } from './trouver-heure-depart/trouver-heure-depart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrouverBusComponent,
    TrouverLigneComponent,
    NavBarComponent,
    CardComponent,
    LoadingAnimationComponent,
    ErrorPageComponent,
    TrouverDestinationComponent,
    TrouverHeureDepartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
