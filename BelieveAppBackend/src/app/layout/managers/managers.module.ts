import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GroupsModule as Ng2Charts } from 'ng2-charts';
import { ManagerRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { PageHeaderModule } from '../../shared';
import { DataTableModule} from "angular2-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PipeFilterModule } from '../pipe-filter/pipe-filter.module';
import {DataFilterPipe} from '../../data-filter.pipe';

@NgModule({
    imports: [CommonModule,DataTableModule, ManagerRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ManagersComponent,DataFilterPipe]
})
export class ManagersModule {}
