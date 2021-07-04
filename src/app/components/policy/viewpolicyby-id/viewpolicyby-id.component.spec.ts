import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyByIdComponent } from './viewpolicyby-id.component';

describe('ViewPolicyByIdComponent', () => {
  let component: ViewPolicyByIdComponent;
  let fixture: ComponentFixture<ViewPolicyByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
