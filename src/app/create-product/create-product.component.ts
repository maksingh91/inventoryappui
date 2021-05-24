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
constructor(private ps: ProductService, private router: Router) { }

ngOnInit() {
  }

save() {
    this.ps.createProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }
onSubmit() {
    this.submitted = true;
    this.save();    
  }
gotoList() {
    this.router.navigate(['/products']);
  }
}
