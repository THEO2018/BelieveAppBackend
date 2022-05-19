import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditblogRoutingModule } from './editblog-routing.module';
import { EditblogComponent } from './editblog.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [CommonModule,
		     EditblogRoutingModule,
		     FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
		     PageHeaderModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [EditblogComponent]
})
export class EditBlogModule {}
