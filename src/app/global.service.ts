import { Injectable } from '@angular/core';
// import { User, ERole } from 'models/User';
import { jsonpFactory } from '@angular/http/src/http_module';
import { Configuration } from 'models/Configuration';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private static TOKENSTORAGE: string = "tokenStorage";
  private static CONFIGURATIONSTORAGE: string = "configurationStorage";
  private static USERSTORAGE: string = "userStorage";

  static getToken(): string {
    return localStorage.getItem(this.TOKENSTORAGE);
  }

  static setConfigurations(data: Configuration) {
    localStorage.setItem(this.CONFIGURATIONSTORAGE, JSON.stringify(data));
  }

  static getConfigurations(): Configuration {
    return JSON.parse(localStorage.getItem(this.CONFIGURATIONSTORAGE));
  }

  static setUser(data: any) {
    localStorage.setItem(this.USERSTORAGE, JSON.stringify(data));
  }

  static getUser(): any {
    return JSON.parse(localStorage.getItem(this.USERSTORAGE));
  }

  static setToken(access_token: string) {
    return localStorage.setItem(this.TOKENSTORAGE, access_token) != null;
  }
  static getImage(loggedUser: any) {
    return './assets/img/user.png';
  }

  constructor() { }
}
