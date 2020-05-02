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
  }

  getSelected(product: Product):boolean {
    return this.selectedProduct == product;
  }

  updateProduct(product: Product):void {
    this.selectedProduct = product;
  }

  saveChanges(): void {
    this.selectedProduct = null;
  }

}
