import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ContentModule as Ng2Charts } from 'ng2-charts';

import { ContentRoutingModule } from './content-management-routing.module';
import { ContentComponent } from './content-management.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ContentRoutingModule, PageHeaderModule],
    declarations: [ContentComponent]
})
export class ContentModule {}
