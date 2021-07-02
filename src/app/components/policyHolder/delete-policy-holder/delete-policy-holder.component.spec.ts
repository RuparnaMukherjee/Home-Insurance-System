import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePolicyHolderComponent } from './delete-policy-holder.component';

describe('DeletePolicyHolderComponent', () => {
  let component: DeletePolicyHolderComponent;
  let fixture: ComponentFixture<DeletePolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePolicyHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
