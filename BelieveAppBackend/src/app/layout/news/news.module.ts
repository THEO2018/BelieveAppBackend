import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, NewsRoutingModule, PageHeaderModule,
        FormsModule,
        ReactiveFormsModule],
    declarations: [NewsComponent]
})
export class NewsModule {}
