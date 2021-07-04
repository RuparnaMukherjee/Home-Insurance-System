import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoliciesByAgentIdComponent } from './view-policies-by-agent-id.component';

describe('ViewPoliciesByAgentIdComponent', () => {
  let component: ViewPoliciesByAgentIdComponent;
  let fixture: ComponentFixture<ViewPoliciesByAgentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPoliciesByAgentIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPoliciesByAgentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
