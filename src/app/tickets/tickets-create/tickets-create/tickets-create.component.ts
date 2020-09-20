import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Ticket } from 'models/Ticket';
import { TicketService } from 'app/tickets/ticket.service';
import { AlertService } from 'app/alert/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tickets-create',
  templateUrl: './tickets-create.component.html',
  styleUrls: ['./tickets-create.component.css']
})
export class TicketsCreateComponent implements OnInit {
  ticket: Ticket;
  loading = true;

  constructor(private ticketService: TicketService
    , private location: Location
    , private _alert: AlertService) {
    var user = GlobalService.getUser();
    this.ticket = new Ticket();
    this.ticket.clientId = user.id;
    this.ticket.clientName = user.name;
    this.ticket.clientEmail = user.email;
    this.loading = false;
  }

  submit() {
    this.ticketService.create(this.ticket)
      .subscribe(
        data => {
          this._alert.success("Ticket foi criado com sucesso", "");
          this.location.back();
        }
      );
  }

  ngOnInit(): void {
  }

}
