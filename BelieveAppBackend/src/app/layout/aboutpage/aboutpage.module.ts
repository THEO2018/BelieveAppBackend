import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {DataTableModule} from "angular2-datatable";
import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutpageComponent } from './aboutpage.component';
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
		     AboutpageRoutingModule,
		     FroalaEditorModule,
		     FroalaViewModule,
		     MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,
		     PageHeaderModule,
		     DataTableModule,
	         FormsModule,
	         ReactiveFormsModule],
    declarations: [AboutpageComponent]
})
export class AboutpageModule {}
