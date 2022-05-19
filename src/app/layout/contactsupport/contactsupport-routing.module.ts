import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsupportComponent } from './contactsupport.component';

const routes: Routes = [
    {
        path: '',
        component: ContactsupportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactsupportRoutingModule {}
