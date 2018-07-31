import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestrecommComponent } from './requestrecomm.component';

const routes: Routes = [
    {
        path: '',
        component: RequestrecommComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestrecommRoutingModule {}
