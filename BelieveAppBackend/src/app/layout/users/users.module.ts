import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRouteModule } from './users-routing.module';
import { UsersComponent } from './users.component'

import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, UsersRouteModule, PageHeaderModule, FormsModule,ReactiveFormsModule
      ],
    declarations: [UsersComponent]
})
export class UsersModule {}
