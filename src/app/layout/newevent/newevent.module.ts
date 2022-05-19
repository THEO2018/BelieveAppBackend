import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEventModule } from './newevent-routing.module';
import { NeweventComponent } from './newevent.component';
import { PageHeaderModule } from '../../shared';
import { MyDatePickerModule } from 'mydatepicker';
 import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [CommonModule, NewEventModule, PageHeaderModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule, FormsModule,ReactiveFormsModule, OwlDateTimeModule, 
    OwlNativeDateTimeModule,
        MyDatePickerModule,
    //   AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBOdFw0bwD2ITHQwIoyY7vkk-68slaH-rI",
    //   libraries: ["places"]
    // })
      ],
    declarations: [NeweventComponent]
})
export class NewEventsModule {}
