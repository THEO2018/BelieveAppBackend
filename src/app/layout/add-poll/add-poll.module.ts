import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPollRoutingModule } from './add-poll-routing.module';
import { AddPollComponent } from './add-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
    imports: [CommonModule,
        OwlDateTimeModule,OwlNativeDateTimeModule,
         AddPollRoutingModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,FormsModule,ReactiveFormsModule],
    declarations: [AddPollComponent]
})
export class AddPollModule {}
