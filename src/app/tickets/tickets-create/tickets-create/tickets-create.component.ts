import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Ticket, ETicketState } from 'models/Ticket';
import { TicketService } from 'app/tickets/ticket.service';
import { AlertService } from 'app/alert/alert.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatMessageService } from 'app/tickets/chat-message.service';
import { ChatMessage } from 'models/ChatMessage';
import { ChatMessageFilter } from 'models/filters/ChatMessageFilter';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-tickets-create',
  templateUrl: './tickets-create.component.html',
  styleUrls: ['./tickets-create.component.scss']
})
export class TicketsCreateComponent implements OnInit {
  ticket: Ticket;
  loading = true;
  stateEnum = {
    enum: ETicketState,
    keys: []
  }

  messagesLoading: boolean = true;
  messagesList: ChatMessage[] = [];
  messagesFilter = new ChatMessageFilter(1, 0);
  messagesCount: number;
  message: string;
  user: any;

  constructor(private ticketService: TicketService
    , private location: Location
    , private _alert: AlertService
    , private _messageService: ChatMessageService
    , private router: Router
    , private _activatedRoute: ActivatedRoute) {
    this.user = GlobalService.getUser();

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

  getMessages(id: string) {
    this.messagesLoading = true;
    this._messageService.getList(id, this.messagesFilter)
      .subscribe(
        data => {
          this.messagesList = data.list;
        },
        error => this.messagesLoading = false,
        () => this.messagesLoading = false
      );
  }

  getImage() {
    return GlobalService.getImage(null);
  }

  setupPusher(ticket_id: string) {
    Pusher.logToConsole = true;

    var pusher = new Pusher('d0d0a4a4c182668bef53', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('ticket-app');
    channel.bind('ticket-' + ticket_id, ($data) => this.messageReceived(JSON.parse($data.message, function (prop, value) {
      if (!prop)
        return value;
      var lower = prop[0].toLowerCase() + prop.substring(1, prop.length);
      if (prop === lower) return value;
      else this[lower] = value;
    })));
  }

  messageReceived(message: ChatMessage) {
    if (!this.messagesList.find(m => m.id == message.id)) {
      this.messagesList.push(message);
    }
  }

  sendMessage() {
    if (!this.message)
      return;
    var chatMessage: ChatMessage = {
      userId: null,
      userName: null,
      date: new Date(),
      message: this.message,
      ticketCode: this.ticket.code,
      ticketId: this.ticket.id,
      id: null,
      clientId: this.user.id,
      clientName: this.user.name
    };
    this._messageService.create(this.ticket.id, chatMessage)
      .subscribe(data => {
        this.message = "";
      });
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

  getTicket(id: string) {
    this.ticketService.getTicket(id)
      .subscribe(
        data => {
          this.ticket = data;
          this.getMessages(this.ticket.id);
          this.setupPusher(this.ticket.id);
          this.loading = false;
        }
      );
  }

  ngOnInit(): void {
  }

}
