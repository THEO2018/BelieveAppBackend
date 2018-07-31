import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MedialistRoutingModule } from './medialist-routing.module';
import { MedialistComponent } from './medialist.component';
import { PageHeaderModule } from '../../shared';
import {DataTableModule} from "angular2-datatable";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    imports: [CommonModule, MedialistRoutingModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,DataTableModule, FormsModule,ReactiveFormsModule,PageHeaderModule],
    declarations: [MedialistComponent]
})
export class MedialistModule {}
