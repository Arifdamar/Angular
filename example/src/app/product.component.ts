import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    model: ProductRepository = new ProductRepository();
    
    addProduct(): void {
        this.model.addProduct(new Product(6, "Samsung Galaxy S11", "The very best phone", "s10.jpg", 8000))
    }

    deleteProduct(productTODelete: Product): void {
        this.model.deleteProduct(productTODelete)
    }

    updateProduct(product: Product): void {
        product.name += "updated";
    }
}