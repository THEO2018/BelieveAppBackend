import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddblogComponent } from './addblog.component';

const routes: Routes = [
    {
        path: '',
        component: AddblogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddblogRoutingModule {}
