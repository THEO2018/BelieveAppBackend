import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecommdationRoutingModule } from './recommdations-routing.module';
import { RecommdationsComponent } from './recommdations.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, RecommdationRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [RecommdationsComponent]
})
export class RecommdationModule {}
