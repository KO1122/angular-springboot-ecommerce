import { Component, computed, input, Signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  pageNumber = input<number>();
  pageSize = input<number>();
  totalElements = input<number>();
  startElementNum: Signal<number> = computed(
    () => (this.pageNumber()! - 1) * this.pageSize()! + 1!
  );
}
