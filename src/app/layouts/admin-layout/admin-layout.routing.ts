import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EntryPageComponent } from 'app/entry-page/entry-page.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'entryPage/:userId/:userName/:userEmail', component: EntryPageComponent },
];
