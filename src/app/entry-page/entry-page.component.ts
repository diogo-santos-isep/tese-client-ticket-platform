import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global.service';
import { Configuration } from 'models/Configuration';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {
  configurations: Configuration;

  constructor(private _activatedRoute:ActivatedRoute) { 
    var id = this._activatedRoute.snapshot.paramMap.get("userId");
    var name = this._activatedRoute.snapshot.paramMap.get("userName");
    var email = this._activatedRoute.snapshot.paramMap.get("userEmail");

    var user = {
      id:id,
      name:name,
      email:email
    };
    GlobalService.setUser(user);
  }

  ngOnInit(): void {
    this.configurations = GlobalService.getConfigurations();
  }

}
