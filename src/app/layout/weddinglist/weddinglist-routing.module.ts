import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddinglistComponent } from './weddinglist.component';

const routes: Routes = [
    {
        path: '',
        component: WeddinglistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeddingRoutingModule {}
