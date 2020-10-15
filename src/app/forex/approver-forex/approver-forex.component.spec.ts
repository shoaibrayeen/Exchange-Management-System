import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverForexComponent } from './approver-forex.component';

describe('ApproverForexComponent', () => {
  let component: ApproverForexComponent;
  let fixture: ComponentFixture<ApproverForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproverForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
