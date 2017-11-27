import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../model';

@Injectable()
export class ProductRepositoryService {

  Products: Product[] = [];

  constructor() {
    this.Products.push(new Product('Finlandia', 'Finlandia is a vodka produced in Finland from Finnish-grown six-row barley and glacial spring water.', 150.97, ProductCategory.Alcohol, true));
    this.Products.push(new Product('Belhaven stout', 'Belhaven Scottish Oat Stout is dark, rich and layered, with a wonderful silky texture and a lingering finish.', 90.75, ProductCategory.Alcohol, true));
    this.Products.push(new Product('Martini Extra Dry', `Martini Extra Dry was launched on New Year's Day 1900. Elegant, delicate and very cool, it is the essential ingredient and the perfect mixer.`, 90.75, ProductCategory.Alcohol, true));
    this.Products.push(new Product('iPhone X', `New phone by apple.`, 25000.00, ProductCategory.Electronics, false));
    this.Products.push(new Product('HTC 10', `New phone by htc.`, 15200.00, ProductCategory.Electronics, true));
    this.Products.push(new Product('FURLA LIKE', `Multi-functional and compact, the Furla Like bag is perfect for a business use.`, 18000.00, ProductCategory.Clothes, false));
  }

}
