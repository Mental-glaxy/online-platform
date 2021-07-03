import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  isLoaded = true
  constructor(private router: Router,private fb: FormBuilder, private auth: AuthService, private cookie: CookieService ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: [''],
      password: ['']
    })
    if(this.cookie.get('auth') === 'successful'){
      this.router.navigate(['account'])
    }
  }
  login() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      console.log(this.loginForm)
      this.auth.login(this.loginForm.value).subscribe((res) =>{
        if(res.status === "successful") {
          this.isLoaded = false
          this.cookie.set('auth', res.status)
          this.cookie.set('login', res.data.user.login)
          this.cookie.set('email', res.data.user.email)
          this.cookie.set('coins', '100')
          this.cookie.set('balance', '4800 ₽')
          this.cookie.set('token', res.data.token)
          this.loginForm.reset()
          this.router.navigate([''])
          console.clear()
        }
      })
      this.isLoaded = true
    }
  }
  toRegister() {
    this.router.navigate(['register'])
  }
}
