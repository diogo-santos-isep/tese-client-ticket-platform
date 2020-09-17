import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalHttpService } from 'app/global-http.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TicketFilter } from 'models/filters/TicketFilter';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  SEARCHTICKETSURL: string = "api/ticket/client/search";

  constructor(private _http: HttpClient, private _globalHttp: GlobalHttpService) { }
  
  getList(filter: TicketFilter): Observable<any> {
    var url = this._globalHttp.ticketInfoServiceUrl + this.SEARCHTICKETSURL;
    return this._http.post(url, filter, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
}
