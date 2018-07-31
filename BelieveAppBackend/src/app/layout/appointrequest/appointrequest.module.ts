import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppointrequestRoutingModule } from './appointrequest-routing.module';
import { AppointrequestComponent } from './appointrequest.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, AppointrequestRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AppointrequestComponent]
})
export class AppointrequestModule {}
