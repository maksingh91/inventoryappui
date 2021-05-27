import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;
  responseMsg!: String;
  isError = false;

constructor(private ps: ProductService, private router: Router) { }

ngOnInit() {
  }

save() {
    this.ps.createProduct(this.product)
    .subscribe(data => {
      console.log(data);
      this.product = new Product();
      this.responseMsg = "Product Created successfully!"
      this.isError=false;
      //this.gotoList();
    },
     error => {
      console.log(error);
      console.log(error.error.message);
      this.isError = true;
      this.responseMsg = error.error.message;
     });
  }
  
onSubmit() {
    this.submitted = true;
    this.save();    
  }
gotoList() {
    this.router.navigate(['/products']);
  }
}
