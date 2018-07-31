import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditSmallRoutingModule } from './editsmallgroup-routing.module';
import { EditsmallgroupComponent } from './editsmallgroup.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule, EditSmallRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,OwlDateTimeModule, 
        OwlNativeDateTimeModule,
        Ng2SearchPipeModule,
        MyDatePickerModule,MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,],
    declarations: [EditsmallgroupComponent]
})
export class  EditSmallModule {}
