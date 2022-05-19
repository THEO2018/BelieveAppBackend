import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialshareComponent } from './socialshare.component';

const routes: Routes = [
    {
        path: '',
        component: SocialshareComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialshareRoutingModule {}
