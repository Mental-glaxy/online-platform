import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-platform';
  isAuth = false
  constructor(private cookie:CookieService) {}
  ngDoCheck() {
    this.checkAuth()
  }
  private checkAuth() {
    if (this.cookie.get('auth') === 'successful') 
      this.isAuth = true
    else 
      this.isAuth = false
  }
}
