import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  loadProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        page: 1
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
     console.log(params.get('page'));
    });
  }

}
