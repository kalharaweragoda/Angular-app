import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AboutUs } from './pages/about-us/about-us';
import { Product } from './pages/product/product';

export const routes: Routes = [
  {
    path:"",
    component:Dashboard
  },
  {
    path:"about-us",
    component:AboutUs
  },
  {
    path:'products',
    component:Product
  }
];
