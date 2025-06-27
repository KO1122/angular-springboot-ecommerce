import { Component } from '@angular/core';
import { ProductCategoryMenuComponent } from '../product-category-menu/product-category-menu.component';

@Component({
  selector: 'app-sidebar',
  imports: [ProductCategoryMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
