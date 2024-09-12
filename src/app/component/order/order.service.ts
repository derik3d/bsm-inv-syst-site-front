import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { Order } from '../../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends GeneralCrudService<Order> {
  getUrl() {
    return 'http://localhost:5000/orders';
  }
}
