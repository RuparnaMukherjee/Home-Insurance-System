import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByEmailIdPolicyHolderComponent } from './view-by-email-id-policy-holder.component';

describe('ViewByEmailIdPolicyHolderComponent', () => {
  let component: ViewByEmailIdPolicyHolderComponent;
  let fixture: ComponentFixture<ViewByEmailIdPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByEmailIdPolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByEmailIdPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
