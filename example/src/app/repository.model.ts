import { SimpleDataSource } from './datasource.model';
import { Product } from './product.model';

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach( product => this.products.push(product));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProductsById(id: number): Product {
        return this.products.find(product => product.id === id);
    }
}