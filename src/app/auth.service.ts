import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface Login {
  login:string;
  password:string;
}

interface Register {
  login:string;
  email:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "https://mental-galaxy-backend-i4mlymzxhq-uc.a.run.app"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS' })
  };
  constructor(
    private http: HttpClient
  ) { }
  login(data:Login):Observable<any> {
    return this.http.post<Login>(`${this.url}/login`, data, this.httpOptions)
  }
  logout() {
    return this.http.post<any>(`${this.url}/logout`, this.httpOptions)
  }
  register(data:any) {
    return this.http.post<Register>(`${this.url}/register`,data, this.httpOptions)
  }
}
