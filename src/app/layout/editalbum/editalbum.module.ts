import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MusicModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditalbumRoutingModule } from './editalbum-routing.module';
import { EditalbumComponent } from './editalbum.component';
import { PageHeaderModule } from '../../shared';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule, EditalbumRoutingModule,MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule, FormsModule,ReactiveFormsModule,PageHeaderModule],
    declarations: [EditalbumComponent]
})
export class EditalbumModule {}
