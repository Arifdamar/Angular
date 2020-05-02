import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { AdminProductsComponent } from './admin-products/admin-products.component';


@NgModule({
  declarations: [
    ProductComponent,
    AdminProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
