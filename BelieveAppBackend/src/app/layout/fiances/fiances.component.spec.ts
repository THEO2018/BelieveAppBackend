import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiancesComponent } from './fiances.component';

describe('FiancesComponent', () => {
  let component: FiancesComponent;
  let fixture: ComponentFixture<FiancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
