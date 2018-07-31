import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NewGroupsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRouteModule } from './user-routing.module';
import { UserComponent } from './user.component';
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
    imports: [CommonModule, UserRouteModule, PageHeaderModule,MatTabsModule,MatButtonModule,MatMenuModule,
        MatToolbarModule,MatIconModule,MatCardModule, FormsModule,ReactiveFormsModule, OwlDateTimeModule, 
    OwlNativeDateTimeModule,
        MyDatePickerModule,
    //   AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBOdFw0bwD2ITHQwIoyY7vkk-68slaH-rI",
    //   libraries: ["places"]
    // })
      ],
    declarations: [UserComponent]
})
export class UserModule {}
