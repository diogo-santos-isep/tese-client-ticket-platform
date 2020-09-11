import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { GlobalHttpService } from './global-http.service';
import { AuthGuard } from './authentication/auth.guard';
import { AlertService } from './alert/alert.service';
import { LoginComponent } from './layouts/login/login.component';
import { DepartmentSaveComponent } from './configuration/department/department-save/department-save.component';
import { ConfigurationComponent } from './configuration/configuration/configuration.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  providers: [AlertService,AuthGuard,GlobalHttpService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
