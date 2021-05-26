import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  products: Product[] | undefined;
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  //displayedColumns: string[] = ['productName', 'productCatagory', 'productDescription', 'unit'];
  //dataSource!: MatTableDataSource<Product>;

  constructor(private ps: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  //ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
 // }

  reloadData() {
    this.ps.getProductList().subscribe(data=>{
      console.log(data)
      this.products = data;
      //this.dataSource = new MatTableDataSource<Product>(this.products);
    }, error => console.log(error));
  }

  updateProduct(id: number){
    this.router.navigate(['/updateProduct', id]);
  }

}

