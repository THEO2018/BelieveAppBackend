import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SmallGroupModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmallGroupModule } from './smallgroup-routing.module';
import { SmallgroupComponent } from './smallgroup.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {DataTableModule} from "angular2-datatable";


@NgModule({
    imports: [CommonModule, SmallGroupModule,DataTableModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [SmallgroupComponent]
})
export class SmallGroupsModule {}
