import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalHttpService } from 'app/global-http.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  SCOPES: string = "department configuration ticket.client ticket.create ticket.chat";
  LOGINURL: string = "connect/token";

  constructor(private _http: HttpClient, private _globalHttp: GlobalHttpService) { }
  // constructor() { }

  login(): any {

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "client_ticket_application");
    urlencoded.append("client_secret", "secret");
    urlencoded.append("scope", this.SCOPES);

    var headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    var options = {
      headers: headers,
    };    
    var url = this._globalHttp.stsUrl + this.LOGINURL;
    return this._http.post(url,`${urlencoded.toString()}`, options)
    .pipe(
      map(res => res),
      catchError(error => this._globalHttp.handleError(error))
    );
    // return "";
  }
}
