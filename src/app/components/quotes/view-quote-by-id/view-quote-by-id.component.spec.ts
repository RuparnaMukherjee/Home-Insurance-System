import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuoteByIdComponent } from './view-quote-by-id.component';

describe('ViewQuoteByIdComponent', () => {
  let component: ViewQuoteByIdComponent;
  let fixture: ComponentFixture<ViewQuoteByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuoteByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuoteByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
