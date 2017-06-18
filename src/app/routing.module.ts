import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View1Component } from './components/view1.component';
import { View2Component } from './components/view2.component';

const routes:Routes = [
    {path: '', redirectTo: '/view1', pathMatch: 'full'},
    {path: 'view1', component: View1Component},
    {path: 'view2', component: View2Component}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {

}