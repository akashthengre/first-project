import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusFooterComponent } from './aboutus-footer.component';

describe('AboutusFooterComponent', () => {
  let component: AboutusFooterComponent;
  let fixture: ComponentFixture<AboutusFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
