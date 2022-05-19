import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { PageHeaderModule } from './../../shared';
import {DataTableModule} from "angular2-datatable";

@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule, GridRoutingModule,DataTableModule, PageHeaderModule],
    declarations: [GridComponent]
})
export class GridModule {}
