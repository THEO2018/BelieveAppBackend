import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MediaRoutingModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, MediaRoutingModule, FormsModule,ReactiveFormsModule,PageHeaderModule],
    declarations: [MediaComponent]
})
export class MediaModule {}
