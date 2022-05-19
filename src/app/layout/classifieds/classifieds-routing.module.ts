import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifiedsComponent } from './classifieds.component';

const routes: Routes = [
    {
        path: '',
        component: ClassifiedsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassifiedsRoutingModule {}
