import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Ticket } from 'models/Ticket';
import { TicketService } from 'app/tickets/ticket.service';
import { AlertService } from 'app/alert/alert.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
    , private _alert: AlertService
    , private router: Router
    , private _activatedRoute: ActivatedRoute) {

    var id = this._activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.getTicket(id);
    } else {
      var user = GlobalService.getUser();
      this.ticket = new Ticket();
      this.ticket.clientId = user.id;
      this.ticket.clientName = user.name;
      this.ticket.clientEmail = user.email;
      this.loading = false;
    }
  }

  submit() {
    this.ticketService.create(this.ticket)
      .subscribe(
        data => {
          this._alert.success("Ticket foi criado com sucesso", "");
          this.router.navigate(['/ticket/save/' + data.id]);
          this.location.back();
        }
      );
  }

  getTicket(id : string) {
    this.ticketService.getTicket(id)
      .subscribe(
        data => {
          this.ticket = data;
          this.loading = false;
        }
      );
  }

  ngOnInit(): void {
  }

}
