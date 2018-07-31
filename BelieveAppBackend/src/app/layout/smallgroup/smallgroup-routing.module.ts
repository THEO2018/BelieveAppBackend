import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmallgroupComponent } from './smallgroup.component';

const routes: Routes = [
    {
        path: '',
        component: SmallgroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmallGroupModule {}
