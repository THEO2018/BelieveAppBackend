import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewmemberRoutingModule } from './newmember-routing.module';
import { NewmemberComponent } from './newmember.component';

import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, NewmemberRoutingModule, FormsModule,ReactiveFormsModule,PageHeaderModule],
    declarations: [NewmemberComponent]
})
export class NewmemberModule {}
