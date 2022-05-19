import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ServicehourRoutingModule } from './servicehour-routing.module';
import { ServicehourComponent } from './servicehour.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [CommonModule,
		     ServicehourRoutingModule,
		     FroalaEditorModule,
		     FroalaViewModule,
		     PageHeaderModule,
	         FormsModule,
	         OwlDateTimeModule, 
             OwlNativeDateTimeModule,
	         ReactiveFormsModule],
    declarations: [ServicehourComponent]
})
export class ServicehourModule {}
