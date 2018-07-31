import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerComponent } from './addmanager.component';

describe('BlankPageComponent', () => {
    let component: AddManagerComponent;
    let fixture: ComponentFixture<AddManagerComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [AddManagerComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AddManagerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
