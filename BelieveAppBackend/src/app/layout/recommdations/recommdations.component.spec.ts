import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommdationsComponent } from './recommdations.component';

describe('RecommdationsComponent', () => {
  let component: RecommdationsComponent;
  let fixture: ComponentFixture<RecommdationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommdationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommdationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
