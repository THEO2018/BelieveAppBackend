import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointrequestComponent } from './appointrequest.component';

describe('AppointrequestComponent', () => {
  let component: AppointrequestComponent;
  let fixture: ComponentFixture<AppointrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
