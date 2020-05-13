import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundRegisterComponent } from './page-not-found-register.component';

describe('PageNotFoundRegisterComponent', () => {
  let component: PageNotFoundRegisterComponent;
  let fixture: ComponentFixture<PageNotFoundRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
