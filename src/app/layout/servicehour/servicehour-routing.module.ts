import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicehourComponent } from './servicehour.component';

const routes: Routes = [
    {
        path: '',
        component: ServicehourComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  ServicehourRoutingModule {}
