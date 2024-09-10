import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';



export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '', redirectTo: '/products' , pathMatch: 'full' },
  ];
