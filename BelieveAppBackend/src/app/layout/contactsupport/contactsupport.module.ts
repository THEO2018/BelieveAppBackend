import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContactsupportRoutingModule } from './contactsupport-routing.module';
import { ContactsupportComponent } from './contactsupport.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [CommonModule,
		     ContactsupportRoutingModule,
		     FroalaEditorModule,
		     FroalaViewModule,
		     PageHeaderModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [ContactsupportComponent]
})
export class ContactsupportModule {}
