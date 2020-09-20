import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCreateFromMessageComponent } from './tickets-create-from-message.component';

describe('TicketsCreateFromMessageComponent', () => {
  let component: TicketsCreateFromMessageComponent;
  let fixture: ComponentFixture<TicketsCreateFromMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsCreateFromMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsCreateFromMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
