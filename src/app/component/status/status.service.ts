import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralCrudService } from '../../crud/services/general-crud.service';
import { Status } from '../../interfaces/status.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends GeneralCrudService<Status> {
  override getClassName(): string {
    return 'Status';
  }
  getUrl() {
    return 'http://localhost:5000/status';
  }
}
