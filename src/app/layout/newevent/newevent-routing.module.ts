import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeweventComponent } from './newevent.component';

const routes: Routes = [
    {
        path: '',
        component: NeweventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewEventModule {}
