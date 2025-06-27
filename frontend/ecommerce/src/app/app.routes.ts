import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: HomeComponent },
  {
    path: 'category/:id',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '',
    component: HomeComponent,
  },
];
