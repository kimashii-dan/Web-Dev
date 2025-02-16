import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductItemComponent],
  template: `
    <section class="results">
      <app-product-item
        *ngFor="let productItem of productItemList"
        [productItem]="productItem"
      ></app-product-item>
    </section>
  `,
  styleUrls: ['./products.component.css'],
})
export class HomeComponent {
  productItemList: Product[] = [];
  productService: ProductService = inject(ProductService);
  constructor() {
    this.productService.getAllProducts().then((productItemList: Product[]) => {
      this.productItemList = productItemList;
    });
  }
}
