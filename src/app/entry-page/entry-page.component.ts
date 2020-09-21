import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Configuration } from 'models/Configuration';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { TicketsCreateDialogComponent } from 'app/tickets/tickets-create/tickets-create-dialog/tickets-create-dialog.component';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  configurations: Configuration;

  constructor(private _activatedRoute:ActivatedRoute, private router:Router) { 
    var id = this._activatedRoute.snapshot.paramMap.get("userId");
    var name = this._activatedRoute.snapshot.paramMap.get("userName");
    var email = this._activatedRoute.snapshot.paramMap.get("userEmail");

    var user = {
      id:id,
      name:name,
      email:email
    };
    GlobalService.setUser(user);
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
  }

}
