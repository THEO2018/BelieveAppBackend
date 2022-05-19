import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditalbumComponent } from './editalbum.component';

const routes: Routes = [
    {
        path: '',
        component: EditalbumComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditalbumRoutingModule {}
