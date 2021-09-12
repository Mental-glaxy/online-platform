import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as env from './env';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

interface ILogin {
  login: string
  password: string
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _url = env.url
  private _headers =  {
    headers: new HttpHeaders({
      'token': env.token,
      'login':env.login,
      'email': env.email,
      'password': env.password,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    })
  };
  constructor(private http: HttpClient, private cookie: CookieService) { }

  getInvitationsList(): Observable<any> {
    return this.http.get(`${this._url}/prereg-users`, this._headers)
  }

  async acceptUser(id: number):Promise<any> {
    const res = await this.http.post(`${this._url}/prereg-users`,id, this._headers).toPromise()
    if (res === "Пользователь зарегистрирован") {
      return res
    } 
      return "Ошибка при регистрации пользователя :("
  }

  login(data: ILogin) {
    if (data.login === env.login && data.password === env.password && data.token === env.token) {
      this.cookie.set('login', data.login);
      this.cookie.set('password', data.password);
      this.cookie.set('token', data.token);
      return "Auth passed!"
    } 
      return "Auth failed :("
  }
}
