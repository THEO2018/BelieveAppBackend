import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditblogComponent } from './editblog.component';

const routes: Routes = [
    {
        path: '',
        component: EditblogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditblogRoutingModule {}
