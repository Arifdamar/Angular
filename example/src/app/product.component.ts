import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm } from '@angular/forms';

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

    getFormValidationErrors(form: NgForm): string[] {
        let messages: string[] = [];

        Object.keys(form.controls).forEach(k => {
            console.log(k);
            console.log(form.controls[k]);

            this.getValidationErrors(form.controls[k], k)
            .forEach(message => messages.push(message));
        });

        return messages;
    }

    getValidationErrors(state: any, key?: string) {
        let controlName: string = state.name || key;
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

    formSubmitted: boolean = false;

    submitForm(form: NgForm) {
        console.log(form);
        this.formSubmitted = true;
        if(form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

}