import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, AppointmentRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [AppointmentComponent]
})
export class AppointmentModule {}
