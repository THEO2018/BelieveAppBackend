import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from "angular2-datatable";
import { SavedpollsRoutingModule } from './savedpolls-routing.module';
import { SavedpollsComponent } from './savedpolls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [CommonModule,DataTableModule,
        OwlDateTimeModule,OwlNativeDateTimeModule,
         SavedpollsRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [SavedpollsComponent]
})
export class SavedpollsModule {}
