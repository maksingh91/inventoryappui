import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private url= environment.baseUrl+"/inventory";
  
  product!: Product;
  products!: Product[];

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.url}/getproduct?id=${id}`);
  }

  searchProduct(category: String): Observable<any> {
    return this.http.get(`${this.url}/searchproductsbycategory?category=${category}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.url}/addproduct`, product);
  }

  updateProduct(value: any): Observable<Object> {
    return this.http.put(`${this.url}/updateproduct`, value);
  }

  getProductList(): Observable<any> {
    return this.http.get(`${this.url}/getallproducts`);
  }

  setProductForUpdate(product: Product){
    this.product = product;
  }

  getProductForUpdate(){
    return this.product;
  }

  getAllProducts(): Product[] {
    return this.products;
  }
  setAllProducts(products: Product[]) {
    this.products=products;
  }

}
