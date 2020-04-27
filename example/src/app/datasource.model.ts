import { Product } from './product.model';

export class SimpleDataSource {
    private products: Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung Galaxy S8", "Good phone", "s8.jpg", 5000),
            new Product(2, "Samsung Galaxy S8+", "Good phone", "s8+.jpg", 5500),
            new Product(3, "Samsung Galaxy S9", "Good phone", "s9.jpg", 6000),
            new Product(4, "Samsung Galaxy S9+", "Good phone", "s9+.jpg", 6500),
            new Product(5, "Samsung Galaxy S10", "The best phone", "s10.jpg", 7000),
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}