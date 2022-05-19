import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingmarriageComponent } from './upcomingmarriage.component';

const routes: Routes = [
    {
        path: '',
        component: UpcomingmarriageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpcomingMarriageRoutingModule {}
