import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { InventoryItem } from '../../interfaces/inventory-item.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService extends GeneralCrudService<InventoryItem> {
  constructor(http: HttpClient) {
    super()
    this.initialize('http://localhost:5000/inventory-items')
  }
}
