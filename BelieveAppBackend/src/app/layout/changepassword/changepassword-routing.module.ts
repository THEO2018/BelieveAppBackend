import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { changePasswordComponent } from './changepassword.component';

const routes: Routes = [
    {
        path: '',
        component: changePasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangePasswordRoutingModule {}
