import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsmallgroupComponent } from './newsmallgroup.component';

const routes: Routes = [
    {
        path: '',
        component: NewsmallgroupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewSmallGroupModule {}
