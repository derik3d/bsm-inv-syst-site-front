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
    CommonModule ,
    ReactiveFormsModule // Add ReactiveFormsModule here
  ],
  providers: [
    { provide: GeneralCrudService, useClass: ProductService }
  ]
})
export class ProductComponent extends GeneralCrudComponent<Product> {

  override getClassName(): string {
    return "Product"
  }

  trackByKey(index: number, item: any): string {
    return item.name;
  }

}

