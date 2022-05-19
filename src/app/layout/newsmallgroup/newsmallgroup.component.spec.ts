import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsmallgroupComponent } from './newsmallgroup.component';

describe('NewsmallgroupComponent', () => {
  let component: NewsmallgroupComponent;
  let fixture: ComponentFixture<NewsmallgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsmallgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsmallgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
