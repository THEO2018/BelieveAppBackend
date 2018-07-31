import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopupRoutingModule } from './popup-routing.module';
import { PopupComponent } from './popup.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
    imports: [CommonModule, PopupRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        MyDatePickerModule,
        ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })],
    declarations: [PopupComponent]
})
export class PopupModule {}
