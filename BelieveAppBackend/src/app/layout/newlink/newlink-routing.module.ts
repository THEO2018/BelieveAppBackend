import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewlinkComponent } from './newlink.component';

const routes: Routes = [
    {
        path: '',
        component: NewlinkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewlinkRoutingModule {}
