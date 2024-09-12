import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import { ProductComponent } from './component/product/product.component';



export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'product', component: ProductComponent },
    { path: '', redirectTo: '/products' , pathMatch: 'full' },
  ];
