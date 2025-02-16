import { Routes } from '@angular/router';
import { HomeComponent } from './products/products.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
];
export default routeConfig;
