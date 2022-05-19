import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SonglistComponent } from './songlist.component';

const routes: Routes = [
    {
        path: '',
        component: SonglistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SonglistRoutingModule {}
