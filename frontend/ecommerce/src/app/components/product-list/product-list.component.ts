import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, CardComponent, PaginationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  products: Product[] = [];
  categoryId: number = 1;
  searchMode: boolean = false;

  pageNumber: number = 1;
  pageSize: number = 10;
  totalElements: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
      window.scrollTo(0, 0);
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  // list products based on search keyword
  handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.productService.searchProducts(keyword).subscribe((data) => {
      this.products = data;
    });
  }

  // list products based on category
  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    }

    // reset page number to 1 if

    this.productService
      .getProductListPagination(
        this.pageNumber - 1,
        this.pageSize,
        this.categoryId
      )
      .subscribe((data) => {
        this.products = data._embedded.products;
        console.log(data);
        // Starting pagination index is 1 but spring data rest starts at 0
        this.pageNumber = data.page.number + 1;
        this.pageSize = data.page.size;
        this.totalElements = data.page.totalElements;
      });
  }
}
