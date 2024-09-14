import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { ProductType } from '../../interfaces/product-type.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService extends GeneralCrudService<ProductType> {
  override getClassName(): string {
    return 'ProductTypes';
  }
  getUrl() {
    return 'http://localhost:5000/product-types';
  }
}
