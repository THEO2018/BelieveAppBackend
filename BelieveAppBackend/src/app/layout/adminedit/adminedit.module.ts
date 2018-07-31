import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEditRoutingModule } from './adminedit-routing.module';
import { AdminEditComponent } from './adminedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule ,ReactiveFormsModule,AdminEditRoutingModule],
    declarations: [AdminEditComponent]
})
export class AdminEditModule {}
