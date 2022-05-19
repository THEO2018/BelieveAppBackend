import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ContactRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [ContactComponent]
})
export class ContactModule {}
