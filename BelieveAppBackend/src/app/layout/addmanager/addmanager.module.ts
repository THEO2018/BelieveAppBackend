import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddManagerRoutingModule } from './addmanager-routing.module';
import { AddManagerComponent } from './addmanager.component';

@NgModule({
    imports: [CommonModule, AddManagerRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [AddManagerComponent]
})
export class AddManagerModule {}
