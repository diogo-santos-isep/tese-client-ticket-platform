import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EntryPageComponent } from 'app/entry-page/entry-page.component';
import { TicketListComponent } from 'app/tickets/ticket-list/ticket-list.component';
import { TicketsCreateFromMessageComponent } from 'app/tickets/tickets-create/tickets-create-from-message/tickets-create-from-message.component';
import { TicketsCreateComponent } from 'app/tickets/tickets-create/tickets-create/tickets-create.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'entryPage/:userId/:userName/:userEmail', component: EntryPageComponent },
    { path: 'ticket/list', component: TicketListComponent },
    { path: 'ticket/create-from-message', component: TicketsCreateFromMessageComponent },
    { path: 'ticket/create', component: TicketsCreateComponent },
];
