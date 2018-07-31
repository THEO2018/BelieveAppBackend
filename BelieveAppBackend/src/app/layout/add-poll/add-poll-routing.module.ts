import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPollComponent } from './add-poll.component';

const routes: Routes = [
    {
        path: '',
        component: AddPollComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddPollRoutingModule {}
