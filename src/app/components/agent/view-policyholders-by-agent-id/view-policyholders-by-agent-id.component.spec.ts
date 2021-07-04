import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyholdersByAgentIdComponent } from './view-policyholders-by-agent-id.component';

describe('ViewPolicyholdersByAgentIdComponent', () => {
  let component: ViewPolicyholdersByAgentIdComponent;
  let fixture: ComponentFixture<ViewPolicyholdersByAgentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyholdersByAgentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyholdersByAgentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
