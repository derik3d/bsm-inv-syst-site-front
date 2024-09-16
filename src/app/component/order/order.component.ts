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
    "client": {
      "email": "client6@example.com",
      "name": "Client F"
    },
    "creation": 1726414285.305219,
    "id": "66e6fdcd2db33881185dc1e3",
    "inventory_items": [
      {
        "additional_info": {
          "description": "A personalized ID card with unique identification."
        },
        "creation": 1726414285.2872214,
        "id": "66e6fdcd2db33881185dc1d5",
        "order_info": null,
        "product_id": 3,
        "product_name": "ID Card",
        "serial_number": "SN32"
      },
      {
        "additional_info": {
          "description": "A contract signed personally."
        },
        "creation": 1726414285.2872214,
        "id": "66e6fdcd2db33881185dc1dc",
        "order_info": null,
        "product_id": 7,
        "product_name": "Personal On-place Agreement",
        "serial_number": "SN71"
      }
    ],
    "status": {
      "creation": 1726414285.328267,
      "description": "Order has been delivered.",
      "id": "66e6fdcd2db33881185dc1ee",
      "order_info": "{\"_id\": \"66e6fdcd2db33881185dc1e3\", \"creation\": 1726414285.305219, \"updated\": 1726414285.305219, \"status\": null, \"status_trace\": [], \"client\": {\"name\": \"Client F\", \"email\": \"client6@example.com\"}, \"inventory_items\": [{\"_id\": \"66e6fdcd2db33881185dc1d5\", \"creation\": 1726414285.2872214, \"product_id\": 3, \"product_name\": \"ID Card\", \"serial_number\": \"SN32\", \"additional_info\": {\"description\": \"A personalized ID card with unique identification.\"}, \"order_info\": null}, {\"_id\": \"66e6fdcd2db33881185dc1dc\", \"creation\": 1726414285.2872214, \"product_id\": 7, \"product_name\": \"Personal On-place Agreement\", \"serial_number\": \"SN71\", \"additional_info\": {\"description\": \"A contract signed personally.\"}, \"order_info\": null}]}",
      "status": "Delivered"
    },
    "status_trace": [
      {
        "creation": 1726414285.3252213,
        "description": "Order has been created.",
        "id": "66e6fdcd2db33881185dc1ec",
        "order_info": "{\"_id\": \"66e6fdcd2db33881185dc1e3\", \"creation\": 1726414285.305219, \"updated\": 1726414285.305219, \"status\": null, \"status_trace\": [], \"client\": {\"name\": \"Client F\", \"email\": \"client6@example.com\"}, \"inventory_items\": [{\"_id\": \"66e6fdcd2db33881185dc1d5\", \"creation\": 1726414285.2872214, \"product_id\": 3, \"product_name\": \"ID Card\", \"serial_number\": \"SN32\", \"additional_info\": {\"description\": \"A personalized ID card with unique identification.\"}, \"order_info\": null}, {\"_id\": \"66e6fdcd2db33881185dc1dc\", \"creation\": 1726414285.2872214, \"product_id\": 7, \"product_name\": \"Personal On-place Agreement\", \"serial_number\": \"SN71\", \"additional_info\": {\"description\": \"A contract signed personally.\"}, \"order_info\": null}]}",
        "status": "Created"
      },
      {
        "creation": 1726414285.3262208,
        "description": "Order is pending.",
        "id": "66e6fdcd2db33881185dc1ed",
        "order_info": "{\"_id\": \"66e6fdcd2db33881185dc1e3\", \"creation\": 1726414285.305219, \"updated\": 1726414285.305219, \"status\": null, \"status_trace\": [], \"client\": {\"name\": \"Client F\", \"email\": \"client6@example.com\"}, \"inventory_items\": [{\"_id\": \"66e6fdcd2db33881185dc1d5\", \"creation\": 1726414285.2872214, \"product_id\": 3, \"product_name\": \"ID Card\", \"serial_number\": \"SN32\", \"additional_info\": {\"description\": \"A personalized ID card with unique identification.\"}, \"order_info\": null}, {\"_id\": \"66e6fdcd2db33881185dc1dc\", \"creation\": 1726414285.2872214, \"product_id\": 7, \"product_name\": \"Personal On-place Agreement\", \"serial_number\": \"SN71\", \"additional_info\": {\"description\": \"A contract signed personally.\"}, \"order_info\": null}]}",
        "status": "Pending"
      },
      {
        "creation": 1726414285.328267,
        "description": "Order has been delivered.",
        "id": "66e6fdcd2db33881185dc1ee",
        "order_info": "{\"_id\": \"66e6fdcd2db33881185dc1e3\", \"creation\": 1726414285.305219, \"updated\": 1726414285.305219, \"status\": null, \"status_trace\": [], \"client\": {\"name\": \"Client F\", \"email\": \"client6@example.com\"}, \"inventory_items\": [{\"_id\": \"66e6fdcd2db33881185dc1d5\", \"creation\": 1726414285.2872214, \"product_id\": 3, \"product_name\": \"ID Card\", \"serial_number\": \"SN32\", \"additional_info\": {\"description\": \"A personalized ID card with unique identification.\"}, \"order_info\": null}, {\"_id\": \"66e6fdcd2db33881185dc1dc\", \"creation\": 1726414285.2872214, \"product_id\": 7, \"product_name\": \"Personal On-place Agreement\", \"serial_number\": \"SN71\", \"additional_info\": {\"description\": \"A contract signed personally.\"}, \"order_info\": null}]}",
        "status": "Delivered"
      }
    ],
    "updated": 1726414285.3472202
  };

  override getData(): Object {
    return this.data;
  }
}
