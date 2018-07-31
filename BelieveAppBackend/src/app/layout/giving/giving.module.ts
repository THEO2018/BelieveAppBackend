import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GivingRoutingModule } from './giving-routing.module';
import { GivingComponent } from './giving.component';
import { PageHeaderModule } from '../../shared';
@NgModule({
	imports: [CommonModule,
		GivingRoutingModule,
		PageHeaderModule,
		FormsModule,
		ReactiveFormsModule],
	declarations: [GivingComponent]
})
export class GivingModule { }
