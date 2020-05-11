import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidator } from './image.validators';

@Component({
    selector: 'app',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    productForm = new FormGroup({
        name: new FormControl('',
        [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20)
        ]),
        price: new FormControl('', Validators.required),
        imageUrl: new FormControl('',
        [
            Validators.required,
            ImageValidator.isValidExtension
        ]),
        description: new FormControl('', Validators.required)
    })

    get name() {
        return this.productForm.get('name');
    }

    get imageUrl() {
        return this.productForm.get('imageUrl');
    }

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