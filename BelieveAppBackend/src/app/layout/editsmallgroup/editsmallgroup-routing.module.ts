import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditsmallgroupComponent } from './editsmallgroup.component';

const routes: Routes = [
    {
        path: '',
        component: EditsmallgroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditSmallRoutingModule {}
