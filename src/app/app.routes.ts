import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./items/item-rows/item-rows.component').then(
        (m) => m.ItemRowsComponent
      ),
  },
  {
    // Always redirect to home
    path: '**',
    redirectTo: '',
  },
];
