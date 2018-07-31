import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehourComponent } from './servicehour.component';

describe('ServicehourComponent', () => {
  let component: ServicehourComponent;
  let fixture: ComponentFixture<ServicehourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicehourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicehourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
