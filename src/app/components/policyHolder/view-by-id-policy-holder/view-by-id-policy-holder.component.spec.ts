import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByIdPolicyHolderComponent } from './view-by-id-policy-holder.component';

describe('ViewByIdPolicyHolderComponent', () => {
  let component: ViewByIdPolicyHolderComponent;
  let fixture: ComponentFixture<ViewByIdPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByIdPolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByIdPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
