import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommdationsComponent } from './recommdations.component';

const routes: Routes = [
    {
        path: '',
        component: RecommdationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecommdationRoutingModule {}
