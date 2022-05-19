import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeddingRoutingModule } from './weddinglist-routing.module';
import { WeddinglistComponent } from './weddinglist.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
import {DataTableModule} from "angular2-datatable";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule, WeddingRoutingModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule, DataTableModule,PageHeaderModule, FormsModule,ReactiveFormsModule,
        MyDatePickerModule],
    declarations: [WeddinglistComponent]
})
export class WeddingModule {}
