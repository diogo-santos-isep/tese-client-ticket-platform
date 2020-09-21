import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { GlobalService } from 'app/global.service';
import { Configuration } from 'models/Configuration';
import { MatDialog } from '@angular/material/dialog';
import { TicketsCreateDialogComponent } from 'app/tickets/tickets-create/tickets-create-dialog/tickets-create-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  configurations: Configuration;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.configurations = GlobalService.getConfigurations();
  }

  createNewTicket(){
    const dialogRef = this.dialog.open(TicketsCreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
