import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GlobalHttpService } from './global-http.service';
import { Observable } from 'rxjs';
import { Configuration } from 'models/Configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  CONFIGURATIONURL: string = "api/configuration";

  constructor(private _http: HttpClient, private _globalHttp: GlobalHttpService) { }
  getConfigurations() : Observable<any>{
    var url = this._globalHttp.configurationsServiceUrl + this.CONFIGURATIONURL;
    return this._http.get(url, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
}
