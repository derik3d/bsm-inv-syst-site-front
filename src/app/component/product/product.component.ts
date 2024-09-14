import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralCrudComponent } from '../../crud/general-crud/general-crud.component';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-crud',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
  ],
  providers: [{ provide: GeneralCrudService, useClass: ProductService }],
})
export class ProductComponent extends GeneralCrudComponent<Product> {
  override getClassName(): string {
    return 'Product';
  }

  data = {
    id: 1,
    product_name: 'Smartphone',
    product_description: 'High-end smartphone',
    fk_product_type_id: 2,
    inner_object: {
      id_: '',
      el_nombresito: '',
    },
    inner_object_array: {
      id_id: '',
      el_nombresito: [
        {
          id: 1,
          part: 1,
        },
        {
          id: 1,
          part: 1,
        },
      ],
    },
  };

  override getData(): Object {
    return this.data;
  }
}
