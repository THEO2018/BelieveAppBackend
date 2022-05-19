import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewGroupsModule } from './newgroup-routing.module';
import { NewgroupComponent } from './newgroup.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    imports: [CommonModule,Ng2SearchPipeModule, NewGroupsModule, MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule,PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [NewgroupComponent]
})
export class NewGroupssModule {}
