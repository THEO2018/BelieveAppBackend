import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewgroupComponent } from './newgroup.component';

const routes: Routes = [
    {
        path: '',
        component: NewgroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewGroupsModule {}
