import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedlistComponent } from './classifiedlist.component';

const routes: Routes = [
    {
        path: '',
        component: ClassifiedlistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassifiedlistRoutingModule {}
