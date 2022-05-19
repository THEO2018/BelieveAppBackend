import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {DataTableModule} from "angular2-datatable";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    imports: [CommonModule,
		     LibraryRoutingModule,DataTableModule,
		     FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
		     PageHeaderModule,
		     MatTabsModule,
		     MatButtonModule,
		     MatMenuModule,
	         MatToolbarModule,
	         MatIconModule,
	         MatCardModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [LibraryComponent]
})
export class LibraryModule {}
