import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TicketService } from '../ticket.service';
import { AlertService } from 'app/alert/alert.service';
import { TicketClientListVM, ETicketState } from 'models/viewModels/TicketClientListVM';
import { TicketFilter } from 'models/filters/TicketFilter';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  stateEnum = {
    enum: ETicketState,
    keys: []
  }

  loading: boolean = true;
  list: TicketClientListVM[] = [];
  filter = new TicketFilter(1, 10);
  count: number;
  constructor(private _service: TicketService, public _alert: AlertService) {
    this.stateEnum.keys = Object.keys(this.stateEnum.enum).filter(k => !isNaN(Number(k))).map(i=> +i);
   }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.loading = true;
    this._service.getList(this.filter)
      .subscribe(
        data => {
          this.list = data.list;
          this.count = data.count;
        },
        error => this.loading = false,
        () => this.loading = false
      );
  }

  paginationChanged(event: PageEvent) {
    this.filter.page = event.pageIndex +1 ;
    this.filter.pageSize = event.pageSize;
    this.getList();
  }

}
