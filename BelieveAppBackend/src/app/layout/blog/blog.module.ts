import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {DataTableModule} from "angular2-datatable";
@NgModule({
    imports: [CommonModule,
		     BlogRoutingModule,DataTableModule,
		     FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
		     PageHeaderModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [BlogComponent]
})
export class BlogModule {}
