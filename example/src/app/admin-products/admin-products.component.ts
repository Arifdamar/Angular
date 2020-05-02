import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{

  products: Product[];
  model: ProductRepository;

  constructor() { 
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }

}
