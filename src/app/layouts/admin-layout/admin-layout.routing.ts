import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserListComponent } from 'app/user/user-list/user-list.component';
import { UserSaveComponent } from 'app/user/user-save/user-save.component';
import { DepartmentSaveComponent } from 'app/configuration/department/department-save/department-save.component';
import { DepartmentListComponent } from 'app/configuration/department/department-list/department-list.component';
import { ConfigurationComponent } from 'app/configuration/configuration/configuration.component';
export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'configuration', component: ConfigurationComponent },
    {
        path: 'user',
        children: [{
            path: '',
            component: UserListComponent
        },{
            path: 'save/:id',
            component: UserSaveComponent
        },{
            path: 'create',
            component: UserSaveComponent
        }]
    },
    {
        path: 'department',
        children: [{
            path: '',
            component: DepartmentListComponent
        },{
            path: 'save/:id',
            component: DepartmentSaveComponent
        },{
            path: 'create',
            component: DepartmentSaveComponent
        }]
    }
];
