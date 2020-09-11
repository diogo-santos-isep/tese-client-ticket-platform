import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AlertService } from './alert/alert.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalHttpService {
  stsUrl: string = "https://localhost:5000/";
  userServiceUrl: string = "https://localhost:5002/";
  configurationsServiceUrl: string = "https://localhost:5004/";

  getRequestOptions() {
    var token = localStorage.getItem("token");
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    var options = {
      headers: headers
    };
    return options;
  }

  constructor(private alert: AlertService) { }
  handleError(error: any): any {
    debugger;
    if (error.status != 401)
      this.alert.error("Erro!", "Algo Correu mal.", true);
    console.error(error);
    return throwError(error);
  }
  buildDateForQP(date: Date): string {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }
}
