import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  configurations: import("c:/Projetos/Tese/tese-client-ticket-platform/src/models/Configuration").Configuration;

  constructor() { }

  ngOnInit(): void {
    this.configurations = GlobalService.getConfigurations();
  }

}
