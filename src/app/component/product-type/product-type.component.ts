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

  data={
    "id": 1,
    "nemo": "PUT",
    "parent_type_id": "",
    "type_name": "public item"
  }
  override getData(): Object {
    return this.data;
  }

}
