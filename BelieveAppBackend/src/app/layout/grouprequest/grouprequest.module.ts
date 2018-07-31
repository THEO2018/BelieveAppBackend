import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RequestsRoutingModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrouprequestRoutingModule } from './grouprequest-routing.module';
import { GrouprequestComponent } from './grouprequest.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';


@NgModule({
    imports: [CommonModule, GrouprequestRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [GrouprequestComponent]
})
export class GrouprequestModule {}
