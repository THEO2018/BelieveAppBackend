import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrouprequestComponent } from './grouprequest.component';

const routes: Routes = [
    {
        path: '',
        component: GrouprequestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrouprequestRoutingModule {}
