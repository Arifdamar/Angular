import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products: Product[];
  model: ProductRepository;
  selectedProduct: Product;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
    this.selectedProduct = new Product(null,'','','',null);
  }

  getSelected(product: Product):boolean {
    return this.selectedProduct.id === product.id;
  }

  updateProduct(product: Product):void {
    this.selectedProduct = product;
  }

}
