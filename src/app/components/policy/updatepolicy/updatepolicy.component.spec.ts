import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePolicyComponent } from './updatepolicy.component';

describe('UpdatepolicyComponent', () => {
  let component: UpdatePolicyComponent;
  let fixture: ComponentFixture<UpdatePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
