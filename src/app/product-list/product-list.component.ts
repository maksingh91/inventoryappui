import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  products!: Product[];
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //displayedColumns: string[] = ['productName', 'productCatagory', 'productDescription', 'unit'];
  //dataSource!: MatTableDataSource<Product>;

  constructor(private ps: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.products = this.ps.getAllProducts();
    this.reloadData();
    interval(10000)
    .subscribe(() => {
      this.reloadData();
    });
  }

  //ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
 // }

  reloadData() {
    this.ps.getProductList().subscribe(data=>{
      console.log(data)
      this.products = data;
      this.ps.setAllProducts(this.products);
      //this.dataSource = new MatTableDataSource<Product>(this.products);
    }, error => console.log(error));
  }

  updateProduct(product: Product){
    this.ps.setProductForUpdate(product)
    this.router.navigate(['/updateProduct']);
  }

}

