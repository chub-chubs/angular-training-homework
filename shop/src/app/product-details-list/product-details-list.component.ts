import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductRepositoryService } from '../services';
import { Product } from '../model';

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsListComponent implements OnInit {

  get products(): Product[] {
    return this.productRepositorySvc.Products;
  }

  constructor(private productRepositorySvc: ProductRepositoryService) { }

  ngOnInit() {
  }

}
