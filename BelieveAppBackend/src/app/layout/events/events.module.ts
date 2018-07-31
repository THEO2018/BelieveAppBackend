import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { PageHeaderModule } from '../../shared';
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [CommonModule, EventsModule,DataTableModule, PageHeaderModule, FormsModule,ReactiveFormsModule],
    declarations: [EventsComponent]
})
export class EventssModule {}
