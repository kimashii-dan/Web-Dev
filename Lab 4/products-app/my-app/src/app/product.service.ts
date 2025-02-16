import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    console.log('we grab that');
    return (await data.json()) ?? [];
  }
  async getProductById(id: number): Promise<undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
