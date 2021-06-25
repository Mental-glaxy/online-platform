import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  userInfo : any
  constructor(private cookie:CookieService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getInfo()
  }

  private getInfo() {
    this.userInfo = {
      login: this.cookie.get('login'),
      email: this.cookie.get('email'),
      balance: this.cookie.get('balance'),
      coins: this.cookie.get('coins'),
    }
  }
  logout() {
    this.auth.logout().subscribe((data)=>{
      if(data.status === "logout passed") {
        this.cookie.delete('login');
        this.cookie.delete('email');
        this.cookie.delete('balance');
        this.cookie.delete('coins');
        this.cookie.delete('auth');
        this.router.navigate(['login'])
      }
    })
  }

}
