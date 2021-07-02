import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePolicyHolderComponent } from './manage-policy-holder.component';

describe('ManagePolicyHolderComponent', () => {
  let component: ManagePolicyHolderComponent;
  let fixture: ComponentFixture<ManagePolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
