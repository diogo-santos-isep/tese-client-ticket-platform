import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCreateDialogComponent } from './tickets-create-dialog.component';

describe('TicketsCreateDialogComponent', () => {
  let component: TicketsCreateDialogComponent;
  let fixture: ComponentFixture<TicketsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
