import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import { ProductComponent } from './component/product/product.component';
import { ProductTypeComponent } from './component/product-type/product-type.component';
import { InventoryItemComponent } from './component/inventory-item/inventory-item.component';
import { StatusComponent } from './component/status/status.component';




export const routes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product-type', component: ProductTypeComponent },
    { path: 'inventory-item', component: InventoryItemComponent },
    { path: 'order', component: OrdersComponent },
    { path: 'status', component: StatusComponent },
    { path: '', redirectTo: '/products' , pathMatch: 'full' },
  ];