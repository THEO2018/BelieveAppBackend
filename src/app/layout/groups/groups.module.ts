import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { GroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { PageHeaderModule } from '../../shared';
import {DataTableModule} from "angular2-datatable";
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [CommonModule,MatTabsModule, FormsModule ,DataTableModule, GroupsModule, PageHeaderModule],
    declarations: [GroupsComponent]
})
export class GroupssModule {}
