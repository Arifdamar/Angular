import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    template: `
            <input [(ngModel)]="email" (keyup.enter)="onKeyup()">
            <br>
            <span> {{ email }} </span>
            `,
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    disabled = true;

    email: string = "info@arifdamar.com"
    onKeyup() {
        console.log(this.email);
    }

}