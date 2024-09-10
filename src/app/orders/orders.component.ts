import { Component } from '@angular/core';
import { ManagerCentralService } from '../manager-central.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  constructor(private managerCentralService : ManagerCentralService){}

  myOrders:any[] = [];

  getOrders(): void {
    this.managerCentralService.getOrders()
        .subscribe(result => this.process(result));
  }

  process(event: any):void{
    console.log(event)
    this.myOrders = event
  }

}
