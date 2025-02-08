import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'mo', loadChildren: () => import('./mo-test/element-list.module').then(m => m.ElementListModule) },
    { path: '**', redirectTo: 'mo', pathMatch: 'full' },
];
