import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerCentralService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any>{
    let answer: any = this.httpClient.get<any>('http://localhost:5000/products')
    return answer
  }

  getOrders(): Observable<any>{
    let answer: any = this.httpClient.get<any>('http://localhost:5000/orders')
    return answer
  }

}
