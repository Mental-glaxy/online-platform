import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar-account',
  templateUrl: './navbar-account.component.html',
  styleUrls: ['./navbar-account.component.scss']
})
export class NavbarAccountComponent implements OnInit {
  username = this.cookie.get('login')
  balance = this.cookie.get('balance')
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
  }

}
