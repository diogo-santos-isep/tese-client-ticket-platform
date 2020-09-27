import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalHttpService } from 'app/global-http.service';
import { ChatMessage } from 'models/ChatMessage';
import { ChatMessageFilter } from 'models/filters/ChatMessageFilter';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  URL_1: any = "api/ticket/";
  URL_2: any = "/chatMessage";
  SEARCHSURL_2: any = "/chatMessage/search";

  constructor(private _http: HttpClient, private _globalHttp: GlobalHttpService) { }

  getList(id : string,filter: ChatMessageFilter): Observable<any> {
    var url = this._globalHttp.ticketChatMessageServiceUrl + this.URL_1 + id + this.SEARCHSURL_2;
    return this._http.post(url, filter, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
  create(ticket_id:string, chatMessage: ChatMessage): Observable<any> {
    var url = this._globalHttp.ticketChatMessageServiceUrl + this.URL_1 + ticket_id + this.URL_2;
    return this._http.post(url, chatMessage, this._globalHttp.getRequestOptions())
      .pipe(
        map(res => res),
        catchError(error => this._globalHttp.handleError(error))
      );
  }
}
