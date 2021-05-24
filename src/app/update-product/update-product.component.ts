import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number = 0;
  product: Product = new Product();;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private ps: ProductService) { }

  ngOnInit() {
    this.product = new Product();
    this.submitted = false;
    this.id = this.route.snapshot.params['id'];
    
    this.ps.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  update() {
    this.ps.updateProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }
onSubmit() {
    this.submitted = true;
    this.update();    
  }
gotoList() {
    this.router.navigate(['/products']);
  }
}
