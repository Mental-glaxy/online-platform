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
  }
  toLogin() {
    this.router.navigate(['login'])
  }
  register() {
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value).subscribe((res) =>{
      console.log(res)
    })
  }
}
