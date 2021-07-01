import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgentByIdComponent } from './view-agent-by-id.component';

describe('ViewAgentByIdComponent', () => {
  let component: ViewAgentByIdComponent;
  let fixture: ComponentFixture<ViewAgentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAgentByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
