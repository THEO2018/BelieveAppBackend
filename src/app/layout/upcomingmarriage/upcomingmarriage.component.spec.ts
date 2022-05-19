import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmarriageComponent } from './upcomingmarriage.component';

describe('UpcomingmarriageComponent', () => {
  let component: UpcomingmarriageComponent;
  let fixture: ComponentFixture<UpcomingmarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingmarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingmarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
