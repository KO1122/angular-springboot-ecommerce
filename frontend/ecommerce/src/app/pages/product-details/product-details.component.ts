import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
      window.scroll(0, 0);
    });
  }

  handleProductDetails() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(productId).subscribe((data) => {
      this.product = data;
    });
  }
}
