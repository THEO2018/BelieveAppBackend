import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageComponent } from './marriage.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [CommonModule, MarriageRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        MyDatePickerModule],
    declarations: [MarriageComponent]
})
export class MarriageGroupModule {}
