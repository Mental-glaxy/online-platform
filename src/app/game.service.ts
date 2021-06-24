import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

interface GameInfo {
  type:string, 
  result: string,
  user_id: string,
  level: string,
  speed: string
}
@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = "http://localhost:5000"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Authorization': `${this.cookie.get("token")}`
  })
  };
  constructor(private http: HttpClient, private cookie:CookieService) { }

  setInfoGame(data:GameInfo):Observable<any> {
    return this.http.post<any>(`${this.url}/save-stats`, data, this.httpOptions)
  }
  getInfoGame(data:GameInfo):Observable<any> {
    return this.http.get<any>(`${this.url}/stats`, this.httpOptions)
  }
}
