import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestrecommRoutingModule } from './requestrecomm-routing.module';
import { RequestrecommComponent } from './requestrecomm.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, RequestrecommRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [RequestrecommComponent]
})
export class RecommdationReqModule {}
