import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElementListComponent } from './component/element-list/element-list.component';
import { ElementListRoutingModule } from './element-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    ElementListComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElementListRoutingModule
  ]
})
export class ElementListModule { }
