import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalHttpService } from 'app/global-http.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TicketFilter } from 'models/filters/TicketFilter';
import { Ticket } from 'models/Ticket';
import { GlobalService } from 'app/global.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  SEARCHTICKETSURL_1: string = "api/client/";
  SEARCHTICKETSURL_2: string = "/ticket/search";
  TICKETURL: string = "api/ticket";

  constructor(private _http: HttpClient, private _globalHttp: GlobalHttpService) { }

  getList(filter: TicketFilter): Observable<any> {
    var clientid = GlobalService.getUser().id;
    var url = this._globalHttp.ticketInfoServiceUrl + this.SEARCHTICKETSURL_1 + clientid + this.SEARCHTICKETSURL_2;
    return this._http.post(url, filter, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
  create(ticket: Ticket): Observable<any> {
    var url = this._globalHttp.ticketInfoServiceUrl + this.TICKETURL;
    return this._http.post(url, ticket, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
}
