import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralCrudService<T> {
  private apiUrl: string;

  constructor(private http: HttpClient, apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  create(entity: T): Observable<void> {
    return this.http.post<void>(this.apiUrl, entity);
  }

  update(entity: T): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${(entity as any).id}`, entity);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
