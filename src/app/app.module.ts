import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MentalTrainerComponent } from './mental-trainer/mental-trainer.component';
import { StatsComponent } from './stats/stats.component';
import { EdThemesComponent } from './ed-themes/ed-themes.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { ResultsTableComponent } from './results-table/results-table.component';
import { NavbarAccountComponent } from './navbar-account/navbar-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MentalTrainerComponent,
    StatsComponent,
    EdThemesComponent,
    AccountComponent,
    RegisterComponent,
    ResultsTableComponent,
    NavbarAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
