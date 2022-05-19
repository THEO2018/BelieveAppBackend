import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedpollsComponent } from './savedpolls.component';

describe('SavedpollsComponent', () => {
  let component: SavedpollsComponent;
  let fixture: ComponentFixture<SavedpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
