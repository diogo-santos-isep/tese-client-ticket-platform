import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UserSaveComponent } from 'app/user/user-save/user-save.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserService } from 'app/user/user.service';
import { AlertService } from 'app/alert/alert.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { DepartmentSaveComponent } from 'app/configuration/department/department-save/department-save.component';
import { DepartmentListComponent } from 'app/configuration/department/department-list/department-list.component';
import { ConfigurationComponent } from 'app/configuration/configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserListComponent,
    UserSaveComponent,
    DepartmentListComponent,
    DepartmentSaveComponent,
    ConfigurationComponent,
  ],
  providers:[UserService]
})

export class AdminLayoutModule {}
