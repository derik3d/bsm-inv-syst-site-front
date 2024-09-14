import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';
import { ProductTypeComponent } from './component/product-type/product-type.component';
import { InventoryItemComponent } from './component/inventory-item/inventory-item.component';
import { OrderComponent } from './component/order/order.component';
import { StatusComponent } from './component/status/status.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    ProductTypeComponent,
    InventoryItemComponent,
    OrderComponent,
    StatusComponent,
    ProductsComponent,
    OrdersComponent,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Big store manager';

  routes = [
    { path: 'product' },
    { path: 'product-type' },
    { path: 'inventory-item' },
    { path: 'order' },
    { path: 'status' },
  ];
}
