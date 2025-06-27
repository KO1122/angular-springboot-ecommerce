import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';
  private categoriesUrl = 'http://localhost:8080/api/product-categories';
  private http = inject(HttpClient);

  constructor() {}

  getProductList(categoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;

    return this.http
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http
      .get<GetResponseProductCategories>(this.categoriesUrl)
      .pipe(map((response) => response._embedded.productCategories));
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}

interface GetResponseProductCategories {
  _embedded: {
    productCategories: ProductCategory[];
  };
}
