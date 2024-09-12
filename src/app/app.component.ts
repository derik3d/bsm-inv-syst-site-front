import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './component/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductComponent,
    ProductsComponent,
    OrdersComponent,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Big store manager';
}
