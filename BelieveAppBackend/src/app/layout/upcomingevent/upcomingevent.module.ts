import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpcomingEventRoutingModule } from './upcomingevent-routing.module';
import { UpcomingeventComponent } from './upcomingevent.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [CommonModule,  OwlDateTimeModule, 
    OwlNativeDateTimeModule,UpcomingEventRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        MyDatePickerModule],
    declarations: [UpcomingeventComponent]
})
export class UpcomingEventModule {}
