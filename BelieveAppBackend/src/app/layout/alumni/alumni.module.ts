import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniRouteModule } from './alumni-routing.module';
import { AlumniComponent } from './alumni.component';

import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, AlumniRouteModule, PageHeaderModule, FormsModule,ReactiveFormsModule
      ],
    declarations: [AlumniComponent]
})
export class AlumniModule {}
