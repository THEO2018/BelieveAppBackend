import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ClassifiedsRoutingModule } from './classifieds-routing.module';
import { ClassifiedsComponent } from './classifieds.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ClassifiedsRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ClassifiedsComponent]
})
export class ClassifiedModule {}
