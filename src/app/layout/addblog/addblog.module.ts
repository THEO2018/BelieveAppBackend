import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxEditorModule } from 'ngx-editor';
import { AddblogRoutingModule } from './addblog-routing.module';
import { AddblogComponent } from './addblog.component';
import { PageHeaderModule } from '../../shared';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule,
		     AddblogRoutingModule,
		     FroalaEditorModule,
		     FroalaViewModule,
		     NgxEditorModule,
		     PageHeaderModule,
		     MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [AddblogComponent]
})
export class AddBlogModule {}
