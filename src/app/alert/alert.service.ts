import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(title:string,message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, title, message, keepAfterRouteChange);
  }

  error(title:string,message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, title, message, keepAfterRouteChange);
  }

  info(title:string,message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, title, message, keepAfterRouteChange);
  }

  warn(title:string,message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning,title, message, keepAfterRouteChange);
  }

  alert(type: AlertType, title:string,message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ type: type, title:title,message: message });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}

export class Alert {
  type: AlertType;
  message: string;
  title:string;
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}