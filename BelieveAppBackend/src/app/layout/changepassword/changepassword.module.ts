import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './changepassword-routing.module';
import { changePasswordComponent } from './changepassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule, ChangePasswordRoutingModule],
    declarations: [changePasswordComponent]
})
export class ChangePasswordModule {}
