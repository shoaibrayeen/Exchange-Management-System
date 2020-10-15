import { TestBed } from '@angular/core/testing';

import { ApproverGuard } from './approver.guard';

describe('ApproverGuard', () => {
  let guard: ApproverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApproverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
