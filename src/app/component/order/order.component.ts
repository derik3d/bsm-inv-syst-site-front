import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralCrudComponent } from '../../crud/general-crud/general-crud.component';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { CommonModule } from '@angular/common';
import { VizCrudComponent } from '../../crud/viz-crud/viz-crud.component';
import { Order } from '../../interfaces/order.interface';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-crud',
  standalone: true,
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [VizCrudComponent, CommonModule, ReactiveFormsModule],
  providers: [{ provide: GeneralCrudService, useClass: OrderService }],
})
export class OrderComponent extends GeneralCrudComponent<Order> {
  data = {
    id: '66e19c799672e0d3fd60d1b1',
    client: {
      email: 'client1@example.com',
      name: 'Client A',
    },
    creation: 1726061689.3864436,
    inventory_items: [
      {
        additional_info: {
          description: 'A high-end smartphone with advanced features.',
        },
        creation: 1726061689.367564,
        id: '66e19c799672e0d3fd60d1a3',
        order_info: null,
        product_id: 1,
        product_name: 'Smartphone',
        serial_number: 'SN11',
      },
    ],
    status: {
      creation: 1726061689.3997486,
      description: 'Order has been created.',
      id: '66e19c799672e0d3fd60d1b7',
      order_info:
        '{"_id": "66e19c799672e0d3fd60d1b1", "creation": 1726061689.3864436, "updated": 1726061689.3864436, "status": null, "status_trace": [], "client": {"name": "Client A", "email": "client1@example.com"}, "inventory_items": [{"_id": "66e19c799672e0d3fd60d1a3", "creation": 1726061689.367564, "product_id": 1, "product_name": "Smartphone", "serial_number": "SN11", "additional_info": {"description": "A high-end smartphone with advanced features."}, "order_info": null}]}',
      status: 'Created',
    },
    status_trace: [
      {
        creation: 1726061689.3997486,
        description: 'Order has been created.',
        id: '66e19c799672e0d3fd60d1b7',
        order_info:
          '{"_id": "66e19c799672e0d3fd60d1b1", "creation": 1726061689.3864436, "updated": 1726061689.3864436, "status": null, "status_trace": [], "client": {"name": "Client A", "email": "client1@example.com"}, "inventory_items": [{"_id": "66e19c799672e0d3fd60d1a3", "creation": 1726061689.367564, "product_id": 1, "product_name": "Smartphone", "serial_number": "SN11", "additional_info": {"description": "A high-end smartphone with advanced features."}, "order_info": null}]}',
        status: 'Created',
      },
    ],
    updated: 1726061689.4212673,
  };

  override getData(): Object {
    return this.data;
  }
}
