import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddinglistComponent } from './weddinglist.component';

describe('WeddinglistComponent', () => {
  let component: WeddinglistComponent;
  let fixture: ComponentFixture<WeddinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
