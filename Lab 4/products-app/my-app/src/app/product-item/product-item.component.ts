import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-item',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="productItem.image"
        alt="Exterior photo of {{ productItem.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ productItem.name }}</h2>
      <p class="listing-location">
        {{ productItem.description }}, {{ productItem.rating }}
      </p>
      <div>
        <button (click)="onDelete()">🗑</button>
        <button (click)="onLike()">
          {{ productItem.liked ? '👎' : '👍' }}
        </button>
      </div>
      <a target="_blank" [href]="productItem.url">Link</a>
      <a target="_blank" [href]="productItem.telegram">Telegram</a>
    </section>
  `,
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() productItem!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.productItem.id);
  }

  onLike() {
    this.like.emit(this.productItem.id);
  }
}
