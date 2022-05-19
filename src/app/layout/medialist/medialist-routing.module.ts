import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedialistComponent } from './medialist.component';

const routes: Routes = [
    {
        path: '',
        component: MedialistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedialistRoutingModule {}
