import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditComponent } from './adminedit.component';

const routes: Routes = [
    {
        path: '',
        component: AdminEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminEditRoutingModule {}
