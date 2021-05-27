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

  //id: number = 0;
  product!: Product;
  submitted = false;
  responseMsg!: String;

  constructor(private route: ActivatedRoute, private router: Router,
    private ps: ProductService) { }

  ngOnInit() {
    this.product = this.ps.getProductForUpdate();
    this.submitted = false;
   // this.id = this.route.snapshot.params['id'];
    
    // this.ps.getProduct(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.product = data;
    //   }, error => console.log(error));
  }

  update() {
    this.ps.updateProduct(this.product)
      .subscribe(data => {
        console.log(data);
        this.responseMsg = "Product Updated successfully!";
        //this.gotoList();
      },
       error => {
        console.log(error);
        console.log(error.error.message);
        this.responseMsg = error.error.message;
       });
  }
onSubmit() {
    this.submitted = true;
    this.update();    
  }
gotoList() {
    this.router.navigate(['/products']);
  }
}
