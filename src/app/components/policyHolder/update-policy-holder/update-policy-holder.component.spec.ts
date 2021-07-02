import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyHolderComponent } from './update-policy-holder.component';

describe('UpdatePolicyHolderComponent', () => {
  let component: UpdatePolicyHolderComponent;
  let fixture: ComponentFixture<UpdatePolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
