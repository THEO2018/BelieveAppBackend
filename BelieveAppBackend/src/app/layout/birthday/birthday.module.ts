import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BirthdayRoutingModule as Ng2Charts } from 'ng2-charts';

import { BirthdayRoutingModule } from './birthday-routing.module';
import { BirthdayComponent } from './birthday.component';
import { PageHeaderModule } from '../../shared';
import {DataTableModule} from "angular2-datatable";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    imports: [CommonModule,DataTableModule, MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,BirthdayRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [BirthdayComponent]
})
export class BirthdayModule {}
