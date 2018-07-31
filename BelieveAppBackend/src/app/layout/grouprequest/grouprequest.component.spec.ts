import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouprequestComponent } from './grouprequest.component';

describe('GrouprequestComponent', () => {
  let component: GrouprequestComponent;
  let fixture: ComponentFixture<GrouprequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrouprequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouprequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
