import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private cookie: CookieService ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      login: [''],
      email: ['',Validators.email],
      password: ['']
    })
    if(this.cookie.get('auth') === 'successful'){
      this.router.navigate(['account'])
    }
  }
  toLogin() {
    this.router.navigate(['login'])
  }
  register() {
    this.auth.register(this.registerForm.value).subscribe((res:any) =>{
      this.cookie.set('auth', res.status)
      this.cookie.set('login', this.registerForm.value.login)
      this.cookie.set('email', this.registerForm.value.email)
      this.cookie.set('coins', '100')
      this.cookie.set('balance', '4800 ₽')
      this.cookie.set('token', res.token)
      this.router.navigate(['account'])
    })
  }
}
