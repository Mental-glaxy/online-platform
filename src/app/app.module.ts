import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { PreregUsersComponent } from './prereg-users/prereg-users.component';
import { PreregUserComponent } from './prereg-user/prereg-user.component';
import { InvStatsComponent } from './inv-stats/inv-stats.component';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminInfoComponent,
    PreregUsersComponent,
    PreregUserComponent,
    InvStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CookieService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
