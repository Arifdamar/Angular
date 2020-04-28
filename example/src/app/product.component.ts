import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: 'app',
    template: `
    {{ text | summary }}
    <br>
    {{ text | summary: 50 }}
    <br>
    {{ text | summary: 100 }}
            `,
    styleUrls: ['./product.component.css']
})
export class ProductComponent {

    text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sequi et placeat, accusamus rem, necessitatibus cum delectus odio ex aspernatur saepe laboriosam modi, iure doloremque facere. Est fuga expedita illo?";

}