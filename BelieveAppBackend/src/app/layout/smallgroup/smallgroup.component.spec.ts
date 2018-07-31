import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallgroupComponent } from './smallgroup.component';

describe('SmallgroupComponent', () => {
  let component: SmallgroupComponent;
  let fixture: ComponentFixture<SmallgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
