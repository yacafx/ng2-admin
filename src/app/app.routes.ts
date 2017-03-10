import { Routes } from '@angular/router';

import { NgaCardTestComponent } from './card-test/card-test.component';
import { NgaLayoutTestComponent } from './layout-test/layout-test.component';
import { NgaTabsetTestComponent } from './tabset-test/tabset-test.component';

export const routes: Routes = [
  {
    path: '',
    component: NgaCardTestComponent,
  },
  {
    path: 'card',
    component: NgaCardTestComponent,
  },
  {
    path: 'layout',
    component: NgaLayoutTestComponent,
  },
  {
    path: 'tabset',
    component: NgaTabsetTestComponent,
  },
  {
    path: '**',
    component: NgaCardTestComponent,
  },
];
