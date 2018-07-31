import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { OnlinestoreRoutingModule } from './onlinestore-routing.module';
import { OnlinestoreComponent } from './onlinestore.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, OnlinestoreRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [OnlinestoreComponent]
})
export class OnlinestoreModule {}
