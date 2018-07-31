import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditmediaComponent } from './editmedia.component';

const routes: Routes = [
    {
        path: '',
        component: EditmediaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditmediaRoutingModule {}
