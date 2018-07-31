import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiancesRoutingModule } from './fiances-routing.module';
import { FiancesComponent } from './fiances.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [CommonModule,DataTableModule, FiancesRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        MyDatePickerModule],
    declarations: [FiancesComponent]
})
export class FiancesModule {}
