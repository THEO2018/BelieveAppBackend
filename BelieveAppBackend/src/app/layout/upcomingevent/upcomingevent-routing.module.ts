import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingeventComponent } from './upcomingevent.component';

const routes: Routes = [
    {
        path: '',
        component: UpcomingeventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpcomingEventRoutingModule {}
