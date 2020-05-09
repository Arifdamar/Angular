import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { NgForm, FormControl } from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    name = new FormControl('Samsung Galaxy S10');
    price = new FormControl('1000');
    imageUrl = new FormControl('s10.jpg');
    description = new FormControl('Good phone');

    updateName() {
        this.name.setValue('Samsung Galaxy S10+');
    }
}