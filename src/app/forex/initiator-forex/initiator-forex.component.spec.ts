import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatorForexComponent } from './initiator-forex.component';

describe('InitiatorForexComponent', () => {
  let component: InitiatorForexComponent;
  let fixture: ComponentFixture<InitiatorForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatorForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatorForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
