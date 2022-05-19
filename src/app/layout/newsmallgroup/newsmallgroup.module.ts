import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SmallGroupModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewSmallGroupModule } from './newsmallgroup-routing.module';
import { NewsmallgroupComponent } from './newsmallgroup.component';
import { PageHeaderModule } from '../../shared';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [
        CommonModule,
        NewSmallGroupModule,
        PageHeaderModule,
        Ng2SearchPipeModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatTabsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [NewsmallgroupComponent]

})
export class NewSmallGroupsModule { }
