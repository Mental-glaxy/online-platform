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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MentalTrainerComponent,
    StatsComponent,
    EdThemesComponent,
    AccountComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
