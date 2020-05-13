import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundLoginComponent } from './page-not-found-login.component';

describe('PageNotFoundLoginComponent', () => {
  let component: PageNotFoundLoginComponent;
  let fixture: ComponentFixture<PageNotFoundLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
