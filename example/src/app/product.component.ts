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
    disabled = true;

    getClasses(id: number): string {
        let product: Product = this.model.getProductById(id);
        return (product.price <= 6000 ? "bg-info" : "bg-secondary") + " m-2 p-2";
    }

    getClassMap(id: number): Object {
        let product: Product = this.model.getProductById(id);
        return { 
            "bg-info": product.price <= 6000,
            "bg-secondary": product.price > 6000,
            "text-center text-white": product.name == "Samsung Galaxy S9+"
        }
    }

    color: string = this.model.getProductById(1).price <= 6000 ? "green" : "red";
    fontSize: string = "25px";

    getStyles(id: number){
        let product: Product = this.model.getProductById(id);
        return {
            fontSize: "25px",
            color: product.price <= 6000 ? "green" : "red"
        }
    }

}