import { Component, OnInit } from '@angular/core';
import { AlertService, Alert, AlertType } from './alert.service';

declare const $: any;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    var mainPanel = document.getElementsByClassName('main-panel')[0];
    $('.modal').on('shown.bs.modal', function () {
      mainPanel.classList.add('no-scroll');
    })
    $('.modal').on('hidden.bs.modal', function () {
      mainPanel.classList.remove('no-scroll');
    })
    
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.showNotification(alert)
    });
  }

  showNotification(alert:Alert) {
    $.notify({
        // icon: this.icon(alert),
        // message: alert.message
    }, {
        type: this.cssClass(alert),
        timer: 3000,
        placement: {
            from: 'top',
            align: 'right'
        },
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-'+this.cssClass(alert)+' alert-with-icon" role="alert">' +
          '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">'+this.icon(alert)+'</i> ' +
          '<span data-notify="title">'+(alert.title ? alert.title : '')+'</span> ' +
          '<span data-notify="message">'+(alert.message ? alert.message : '')+'</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-'+this.cssClass(alert)+'" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          // '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }
    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'success';
      case AlertType.Error:
        return 'danger';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
      default:
        return 'primary';
    }
  }
  icon(alert: Alert) {
    if (!alert) {
      return;
    }
    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'check';
      case AlertType.Error:
        return 'error';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
      default:
        return 'notifications';
    }
  }
}
