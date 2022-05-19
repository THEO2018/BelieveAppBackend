import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestrecommComponent } from './requestrecomm.component';

describe('RequestrecommComponent', () => {
  let component: RequestrecommComponent;
  let fixture: ComponentFixture<RequestrecommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestrecommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestrecommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
