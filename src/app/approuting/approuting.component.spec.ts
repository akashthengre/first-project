import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproutingComponent } from './approuting.component';

describe('ApproutingComponent', () => {
  let component: ApproutingComponent;
  let fixture: ComponentFixture<ApproutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
