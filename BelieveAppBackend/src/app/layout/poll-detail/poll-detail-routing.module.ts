import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollDetailComponent } from './poll-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PollDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PollDetailRoutingModule {}
