import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DeprecatedCurrencyPipe } from '@angular/common';
import { Product } from './models/product';
import { ProductCategory } from './models/product-categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  Products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.Products.push(
      new Product('Finlandia', 'Finlandia vodka', 99.99, ProductCategory.Alcohol, true),
      new Product('Bud', 'Budweiser an American-style pale lager', 12.00, ProductCategory.Alcohol, true),
      new Product('Adidas Z-75', 'Cool sneakers from Adidas', 1500.00, ProductCategory.Clothes, false),
      new Product('Milk', 'Just milk', 15.00, ProductCategory.Food, true)
    );
  }

}
