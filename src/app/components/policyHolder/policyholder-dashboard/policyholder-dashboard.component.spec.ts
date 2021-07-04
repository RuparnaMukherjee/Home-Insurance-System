import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyHolderDashBoardComponent } from './policyholder-dashboard.component';

describe('PolicyHolderDashBoardComponent', () => {
  let component: PolicyHolderDashBoardComponent;
  let fixture: ComponentFixture<PolicyHolderDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyHolderDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyHolderDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
