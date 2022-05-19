import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { changePasswordComponent } from './changepassword.component';

describe('changePasswordComponent', () => {
    let component: changePasswordComponent;
    let fixture: ComponentFixture<changePasswordComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [changePasswordComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(changePasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
