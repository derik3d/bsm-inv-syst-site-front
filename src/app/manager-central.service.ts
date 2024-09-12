import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './component/product/product.service';
import { OrderService } from './component/order/order.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerCentralService {

  constructor(private httpClient: HttpClient,
    private serviceProduct: ProductService,
    private serviceOrders: OrderService,
  ) {
   }

  getProducts(): Observable<any>{
    let answer: any = this.serviceProduct.getAll()
    return answer
  }

  getOrders(): Observable<any>{
    let answer: any = this.serviceOrders.getAll()
    return answer
  }

  consultOrder(id:string): Observable<any>{
    let answer: any = this.serviceOrders.getWithString(id);
    return answer
  }

}
