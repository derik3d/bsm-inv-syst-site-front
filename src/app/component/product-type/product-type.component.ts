import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralCrudComponent } from '../../crud/general-crud/general-crud.component';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { VizCrudComponent } from '../../crud/viz-crud/viz-crud.component';
import { ProductTypeService } from './product-type.service';

@Component({
  selector: 'app-product-type-crud',
  standalone: true,
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
  imports: [
    VizCrudComponent,
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
  ],
  providers: [{ provide: GeneralCrudService, useClass: ProductTypeService }],
})
export class ProductTypeComponent extends GeneralCrudComponent<Product> {
  data = {
    id: '66e19c799672e0d3fd60d1a3',
    additional_info: {
      description: 'A high-end smartphone with advanced features.',
    },
    creation: 1726061689.367564,
    order_info:
      '{"_id": "66e19c799672e0d3fd60d1b1", "creation": 1726061689.3864436, "updated": 1726061689.3864436, "status": null, "status_trace": [], "client": {"name": "Client A", "email": "client1@example.com"}, "inventory_items": [{"_id": "66e19c799672e0d3fd60d1a3", "creation": 1726061689.367564, "product_id": 1, "product_name": "Smartphone", "serial_number": "SN11", "additional_info": {"description": "A high-end smartphone with advanced features."}, "order_info": null}]}',
    product_id: 1,
    product_name: 'Smartphone',
    serial_number: 'SN11',
  };

  override getData(): Object {
    return this.data;
  }
}
