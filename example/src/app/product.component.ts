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
    
    newProduct: Product = new Product();

    get jsonProduct():string {
        return JSON.stringify(this.newProduct);
    }

    addProduct(product: Product): void {
        console.log('new product: ' + this.jsonProduct);
    }

    getValidationErrors(state: any) {
        let controlName: string = state.name;
        let messages: string[] = [];

        if(state.errors) {
            for(let errorName in state.errors) {
                switch(errorName){
                    case 'required':
                        messages.push(`You must enter a ${controlName}.`);
                        break;
                    case 'minlength':
                        messages.push(`Minimun character length for ${controlName} is ${state.errors.minlength.requiredLength}`);
                        break;
                    case 'pattern':
                        messages.push(`${controlName} contains invalid characters`);
                }
            }
        }
        return messages;
    }

    submitForm(form) {
        console.log(form);
        
    }

}