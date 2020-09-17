import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Configuration } from 'models/Configuration';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  configurations: Configuration;

  constructor() { }

  ngOnInit(): void {
    this.configurations = GlobalService.getConfigurations();
  }

}
