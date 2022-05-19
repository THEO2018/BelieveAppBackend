import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RequestsRoutingModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './requests.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';


@NgModule({
    imports: [CommonModule, RequestsRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [RequestsComponent]
})
export class RequestsModule {}
