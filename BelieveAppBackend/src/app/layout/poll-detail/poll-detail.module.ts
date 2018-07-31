import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollDetailRoutingModule } from './poll-detail-routing.module';
import { PollDetailComponent } from './poll-detail.component';

@NgModule({
    imports: [CommonModule, PollDetailRoutingModule],
    declarations: [PollDetailComponent]
})
export class PollDetailModule {}
