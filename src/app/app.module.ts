import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MessagesService } from './services/messages.service';
import { GameService } from './services/game.service';
import { LoginComponent } from './login/login.component';
import { BmiComponent } from './bmi/bmi.component';
import { DietComponent } from './diet/diet.component';
import { TryComponent } from './try/try.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    GameComponent,
    LoginComponent,
    BmiComponent,
    DietComponent,
    TryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: 'login', component: LoginComponent },
        { path: 'bmi', component: BmiComponent },
        { path: 'diet', component:DietComponent},
        { path: 'try', component:TryComponent},
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
