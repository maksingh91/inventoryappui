import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url= 'http://localhost:8085/inventory';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.url}/getproduct?id=${id}`);
  }

  createProduct(employee: Object): Observable<Object> {
    return this.http.post(`${this.url}/addproduct`, employee);
  }

  updateProduct(value: any): Observable<Object> {
    return this.http.put(`${this.url}/updateproduct`, value);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.url}/getallproducts`);
  }
}