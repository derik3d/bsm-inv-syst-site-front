import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GeneralCrudService<Product> {
  constructor(http: HttpClient) {
    super()
    this.initialize('http://localhost:5000/products')
  }
}
