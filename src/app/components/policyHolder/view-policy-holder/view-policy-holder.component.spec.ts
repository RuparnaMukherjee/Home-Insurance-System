import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyHolderComponent } from './view-policy-holder.component';

describe('ViewPolicyHolderComponent', () => {
  let component: ViewPolicyHolderComponent;
  let fixture: ComponentFixture<ViewPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
