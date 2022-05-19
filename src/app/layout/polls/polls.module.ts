import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DataTableModule} from "angular2-datatable";
import { PollsRoutingModule } from './polls-routing.module';
import { PollsComponent } from './polls.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule,DataTableModule, PollsRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [PollsComponent]
})
export class PollsModule {}
