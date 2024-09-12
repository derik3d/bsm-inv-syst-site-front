import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Identifiable } from '../interfaces/Identificable.interface';

const ENTITY_URLS: { [key: string]: string } = {
  Product: 'https://localhost:5000/products',
  Order: 'https://localhost:5000/orders',
};

@Injectable({
  providedIn: 'root'
})
export abstract class GeneralCrudService<T extends Identifiable> {

  private http: HttpClient = inject(HttpClient);

  constructor(){
    this.url = this.getUrl();
  }

  abstract getUrl(): string;

  private url!: string
  
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  get(entity: T): Observable<T> {
    return this.http.get<T>(`${this.url}/${entity.id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.put<T>(`${this.url}/${entity.id}`, entity);
  }

  delete(entity: T): Observable<void> {
    return this.http.delete<void>(`${this.url}/${entity.id}`);
  }
}
