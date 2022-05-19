import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [CommonModule,
		     NotesRoutingModule,
		     FroalaEditorModule,
		     FroalaViewModule,
		     PageHeaderModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [NotesComponent]
})
export class NotesModule {}
