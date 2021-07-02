import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolicyHolderComponent } from './add-policy-holder.component';

describe('AddPolicyHolderComponent', () => {
  let component: AddPolicyHolderComponent;
  let fixture: ComponentFixture<AddPolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
