import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManagerComponent } from './addmanager.component';

const routes: Routes = [
    {
        path: '',
        component: AddManagerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddManagerRoutingModule {}
