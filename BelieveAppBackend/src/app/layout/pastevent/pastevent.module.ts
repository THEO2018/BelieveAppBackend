import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SmallGroupModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasteventModule } from './pastevent-routing.module';
import { PasteventComponent } from './pastevent.component';
import { PageHeaderModule } from '../../shared';
import {ToastModule} from 'ng2-toastr/ng2-toastr';


@NgModule({
    imports: [CommonModule, PasteventModule, PageHeaderModule, FormsModule,ReactiveFormsModule,
        ToastModule.forRoot()],
    declarations: [PasteventComponent]
})
export class PastEventsModule {}
