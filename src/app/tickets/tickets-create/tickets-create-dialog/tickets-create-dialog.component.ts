import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tickets-create-dialog',
  templateUrl: './tickets-create-dialog.component.html',
  styleUrls: ['./tickets-create-dialog.component.css']
})
export class TicketsCreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TicketsCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {}

  ngOnInit(): void {
  }

}
