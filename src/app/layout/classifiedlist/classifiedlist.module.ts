import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { ClassifiedlistRoutingModule } from './classifiedlist-routing.module';
import { ClassifiedlistComponent } from './classifiedlist.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule, ClassifiedlistRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ClassifiedlistComponent]
})
export class ClassifiedlistModule {}
