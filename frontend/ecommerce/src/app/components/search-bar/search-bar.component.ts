import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  router = inject(Router);

  getSearchResults(keyword: string) {
    this.router.navigateByUrl(`/search/${keyword}`);
  }
}
