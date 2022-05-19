import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewmemberComponent } from './newmember.component';

const routes: Routes = [
    {
        path: '',
        component: NewmemberComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewmemberRoutingModule {}
