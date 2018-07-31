import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditmediaRoutingModule } from './editmedia-routing.module';
import { EditmediaComponent } from './editmedia.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, EditmediaRoutingModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [EditmediaComponent]
})
export class EditmediaModule {}
