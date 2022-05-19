import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedlistComponent } from './classifiedlist.component';

describe('ClassifiedlistComponent', () => {
  let component: ClassifiedlistComponent;
  let fixture: ComponentFixture<ClassifiedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
