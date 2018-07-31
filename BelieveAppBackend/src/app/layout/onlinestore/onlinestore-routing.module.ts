import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlinestoreComponent } from './onlinestore.component';

const routes: Routes = [
    {
        path: '',
        component: OnlinestoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnlinestoreRoutingModule {}
