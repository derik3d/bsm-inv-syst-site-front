import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { ProductTypes } from '../../interfaces/product-types.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService extends GeneralCrudService<ProductTypes> {
  constructor(http: HttpClient) {
    super()
    this.initialize('http://localhost:5000/product-types')
  }
}
