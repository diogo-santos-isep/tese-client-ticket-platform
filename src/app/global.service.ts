import { Injectable } from '@angular/core';
import { User, ERole } from 'models/User';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private static USERSTORAGE: string = "userStorage";
  static CreateUserStorageItem(user: User) {
    var storage: User = Object.assign({}, user);
    storage.photo = null;
    localStorage.setItem(this.USERSTORAGE, JSON.stringify(storage));
  }
  static getImage(loggedUser: User) {
    return './assets/img/user.png';
  }

  static getLoggedUser(): User {
    return JSON.parse(localStorage.getItem(this.USERSTORAGE));
  }

  static getRoleTranslation(role: ERole) {
    switch (role) {
      case ERole.Administrador:
        return "Administrador";
      case ERole.Colaborador:
        return "Colaborador";
      default:
        return "";
    }
  }

  constructor() { }
}
