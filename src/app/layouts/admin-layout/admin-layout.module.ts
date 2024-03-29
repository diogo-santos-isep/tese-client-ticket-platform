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
import { AlertService } from 'app/alert/alert.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { EntryPageComponent } from 'app/entry-page/entry-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TicketsCreateComponent } from 'app/tickets/tickets-create/tickets-create/tickets-create.component';
import { TicketListComponent } from 'app/tickets/ticket-list/ticket-list.component';
import { TicketsCreateDialogComponent } from 'app/tickets/tickets-create/tickets-create-dialog/tickets-create-dialog.component';
import { TicketsCreateFromMessageComponent } from 'app/tickets/tickets-create/tickets-create-from-message/tickets-create-from-message.component';
import {MatDividerModule} from '@angular/material/divider';
import { ChatMessageService } from 'app/tickets/chat-message.service';
import { TicketService } from 'app/tickets/ticket.service';

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
    MatDividerModule, 
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    EntryPageComponent,
    TicketListComponent,
    TicketsCreateDialogComponent,
    TicketsCreateComponent,
    TicketsCreateFromMessageComponent,
  ],
  entryComponents:[TicketsCreateDialogComponent],
  providers:[ChatMessageService, TicketService]
})

export class AdminLayoutModule {}
