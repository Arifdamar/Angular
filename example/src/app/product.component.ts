import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    productForm = new FormGroup({
        name: new FormControl('Samsung Galaxy S10'),
        price: new FormControl('1000'),
        imageUrl: new FormControl('s10.jpg'),
        description: new FormControl('Good phone')
    })

    onSubmit() {
        console.log(this.productForm.value);
    }

    updateProduct() {
        this.productForm.patchValue({
            name: 'Samsung Galaxy S10+',
            price: '2000',
            imageUrl: 's10+.jpg',
            description: 'Better phone'
        })
    }
}