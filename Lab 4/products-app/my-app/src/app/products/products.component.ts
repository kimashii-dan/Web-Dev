// products.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div>
      <div class="categories">
        <button
          [class.active]="activeCategory === 'all'"
          (click)="filterProducts('all')"
        >
          All products
        </button>
        <button
          [class.active]="activeCategory === 'household appliances'"
          (click)="filterProducts('household appliances')"
        >
          Household
        </button>
        <button
          [class.active]="activeCategory === 'phones'"
          (click)="filterProducts('phones')"
        >
          Phones
        </button>
        <button
          [class.active]="activeCategory === 'laptops'"
          (click)="filterProducts('laptops')"
        >
          Laptops
        </button>
      </div>
      <section class="results">
        <app-product-item
          *ngFor="let productItem of filteredProductList"
          [productItem]="productItem"
          (delete)="deleteProduct(productItem.id)"
          (like)="toggleLike(productItem.id)"
        ></app-product-item>
      </section>
    </div>
  `,
  styleUrls: ['./products.component.css'],
})
export class HomeComponent {
  productItemList: Product[] = [];
  filteredProductList: Product[] = [];
  activeCategory: string = 'all';
  productService: ProductService = inject(ProductService);

  constructor() {
    this.loadAllProducts();
  }

  async loadAllProducts() {
    this.productItemList = await this.productService.getAllProducts();
    this.filteredProductList = this.productItemList;
  }

  async filterProducts(category: string) {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredProductList = this.productItemList;
    } else {
      this.filteredProductList =
        await this.productService.getProductsByCategory(category);
    }
  }

  deleteProduct(id: number) {
    this.filteredProductList = this.filteredProductList.filter(
      (product) => product.id !== id
    );
  }

  toggleLike(id: number) {
    this.filteredProductList = this.filteredProductList.map((product) =>
      product.id === id ? { ...product, liked: !product.liked } : product
    );
  }
}
