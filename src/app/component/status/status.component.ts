import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralCrudComponent } from '../../crud/general-crud/general-crud.component';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { CommonModule } from '@angular/common';
import { VizCrudComponent } from '../../crud/viz-crud/viz-crud.component';
import { Status } from '../../interfaces/status.interface';
import { StatusService } from './status.service';

@Component({
  selector: 'app-status-crud',
  standalone: true,
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  imports: [
    VizCrudComponent,
    CommonModule,
    ReactiveFormsModule, 
  ],
  providers: [{ provide: GeneralCrudService, useClass: StatusService }],
})
export class StatusComponent extends GeneralCrudComponent<Status> {

  data = {
    "_id": "66e19c799672e0d3fd60d1b7",
    "creation": 1726061689.3997486,
    "description": "Order has been created.",
    "order_info": "{\"_id\": \"66e19c799672e0d3fd60d1b1\", \"creation\": 1726061689.3864436, \"updated\": 1726061689.3864436, \"status\": null, \"status_trace\": [], \"client\": {\"name\": \"Client A\", \"email\": \"client1@example.com\"}, \"inventory_items\": [{\"_id\": \"66e19c799672e0d3fd60d1a3\", \"creation\": 1726061689.367564, \"product_id\": 1, \"product_name\": \"Smartphone\", \"serial_number\": \"SN11\", \"additional_info\": {\"description\": \"A high-end smartphone with advanced features.\"}, \"order_info\": null}]}",
    "status": "Created"
  }

  override getData(): Object {
    return this.data;
  }
}
