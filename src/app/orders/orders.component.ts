import { Component } from '@angular/core';
import { ManagerCentralService } from '../manager-central.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(private managerCentralService : ManagerCentralService){}

  myOrders:any[] = []
  detailReqId:string = ""
  detailOrderData:any = ""
  result:any = ""
  inputValueOrderDetail:any = ""

  consultOrder(): void {
    this.managerCentralService
    .consultOrder(this.detailReqId)
    .subscribe(result => this.detailOrderData = result);
  }

  getOrders(): void {
    this.managerCentralService
    .getOrders()
    .subscribe(result => this.process(result));
  }

  process(event: any):void{
    console.log(event)
    this.myOrders = event
  }

}
