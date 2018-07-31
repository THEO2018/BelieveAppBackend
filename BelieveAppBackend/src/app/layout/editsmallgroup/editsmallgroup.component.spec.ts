import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsmallgroupComponent } from './editsmallgroup.component';

describe('EditsmallgroupComponent', () => {
  let component: EditsmallgroupComponent;
  let fixture: ComponentFixture<EditsmallgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsmallgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsmallgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
