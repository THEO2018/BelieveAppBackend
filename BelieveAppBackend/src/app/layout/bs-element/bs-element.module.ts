import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';
import { PageHeaderModule } from './../../shared';
import { MatTabsModule } from '@angular/material/tabs';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
    imports: [CommonModule,OwlDateTimeModule,
        OwlNativeDateTimeModule,MatTabsModule, BsElementRoutingModule, PageHeaderModule,FormsModule,
        ReactiveFormsModule],
    declarations: [BsElementComponent]
})
export class BsElementModule {}
