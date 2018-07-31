import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialshareRoutingModule } from './socialshare-routing.module';
import { SocialshareComponent } from './socialshare.component';
import { PageHeaderModule } from '../../shared';
@NgModule({
	imports: [CommonModule,
		SocialshareRoutingModule,
		PageHeaderModule,
		FormsModule,
		ReactiveFormsModule],
	declarations: [SocialshareComponent]
})
export class SocialshareModule { }
