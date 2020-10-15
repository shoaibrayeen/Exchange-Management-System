import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatorAccountComponent } from './initiator-account.component';

describe('InitiatorAccountComponent', () => {
  let component: InitiatorAccountComponent;
  let fixture: ComponentFixture<InitiatorAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatorAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
