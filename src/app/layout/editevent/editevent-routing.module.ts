import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditeventComponent } from './editevent.component';
const routes: Routes = [
    {
        path: '',
        component: EditeventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditeventRoutingModule {}
