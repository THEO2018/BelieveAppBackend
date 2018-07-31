import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiancesComponent } from './fiances.component';

const routes: Routes = [
    {
        path: '',
        component: FiancesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FiancesRoutingModule {}
