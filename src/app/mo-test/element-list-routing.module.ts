import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementListComponent } from './component/element-list/element-list.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
    
const routes: Routes = [
    { path: '', component: ElementListComponent },
    {path: 'user', component: UserDashboardComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementListRoutingModule { }
