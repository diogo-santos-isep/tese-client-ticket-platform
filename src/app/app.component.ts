import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { AuthenticationService } from './authentication/authentication.service';
import { ConfigurationService } from './configuration.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loading: boolean = true;
  constructor(private _authService: AuthenticationService, private configService: ConfigurationService) {
    if (!GlobalService.getToken() || !GlobalService.getConfigurations()) {
      _authService.login()
        .subscribe(data => {
          GlobalService.setToken(data.access_token);
          this.configService.getConfigurations()
            .subscribe(data => {
              GlobalService.setConfigurations(data);
              this.loading = false;
            });
        });
    } else
      this.loading = false;
  }
}
