import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewlinkRoutingModule } from './newlink-routing.module';
import { NewlinkComponent } from './newlink.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {DataTableModule} from "angular2-datatable";
@NgModule({
    imports: [CommonModule,
		     NewlinkRoutingModule,DataTableModule,
		     FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
		     PageHeaderModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [NewlinkComponent]
})
export class NewlinkModule {}
