import { Component, OnInit } from '@angular/core';
import { ERole } from 'models/User';
import { GlobalService } from 'app/global.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: ERole
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', role:null },
    { path: '/user', title: 'Utilizadores',  icon:'person', class: '', role:ERole.Administrador },
    { path: '/department', title: 'Departamentos',  icon:'home', class: '', role:ERole.Administrador },
    { path: '/configuration', title: 'Configurações',  icon:'settings', class: '', role:ERole.Administrador },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    var role = GlobalService.getLoggedUser().role;
    this.menuItems = ROUTES.filter(menuItem => menuItem.role == role || !menuItem.role);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
