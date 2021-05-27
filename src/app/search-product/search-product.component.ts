import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  products: any | undefined;
  submitted = false;
  responseMsg!: String;
  productCatagory!: String;
  isError = false;
  
  constructor(private ps: ProductService, private router: Router) {}

  ngOnInit(): void {
  }

  searchProduct() {
    this.ps.searchProduct(this.productCatagory)
    .subscribe(data => {
      console.log(data);
      this.products= data;
      this.submitted = true;
      this.isError=false;
    },
     error => {
      console.log(error);
      this.isError=true;
      console.log(error.error.message);
      this.responseMsg = error.error.message;
     });
  }

  update(product : Product) {
    this.ps.updateProduct(product)
      .subscribe(data => {
        console.log(data);
        this.responseMsg = "Product Updated successfully!"
        //this.gotoList();
      },
       error => {
        console.log(error);
        this.responseMsg = error.value;
       });
  }

  updateProduct(product: Product){
    this.ps.setProductForUpdate(product)
    this.router.navigate(['/updateProduct']);
  }
}
