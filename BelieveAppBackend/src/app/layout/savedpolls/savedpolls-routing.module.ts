import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavedpollsComponent } from './savedpolls.component';

const routes: Routes = [
    {
        path: '',
        component: SavedpollsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SavedpollsRoutingModule {}
