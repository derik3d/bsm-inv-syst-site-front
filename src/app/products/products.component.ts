import { Component } from '@angular/core';
import { ManagerCentralService } from '../manager-central.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe,
    CommonModule ,
    ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private managerCentralService : ManagerCentralService){}

  myProducts:any[] = [];

  getProducts(): void {
    this.managerCentralService.getProducts()
        .subscribe(result => this.process(result));
  }

  process(event: any):void{
    console.log(event)
    this.myProducts = event
  }
}
