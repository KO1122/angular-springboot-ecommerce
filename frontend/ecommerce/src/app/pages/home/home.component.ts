import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
