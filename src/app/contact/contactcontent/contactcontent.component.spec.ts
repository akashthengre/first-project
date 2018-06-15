import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcontentComponent } from './contactcontent.component';

describe('ContactcontentComponent', () => {
  let component: ContactcontentComponent;
  let fixture: ComponentFixture<ContactcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
