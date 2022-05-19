import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditgroupComponent } from './editgroup.component';

const routes: Routes = [
    {
        path: '',
        component: EditgroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditGroupRoutingModule {}
