import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to route parameters
    this.activatedRoute.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        // Perform search logic here if needed
      }
    });
  }

  search(term: string): void {
    if (term) {
      this.router.navigate(['/search', term]); // Navigate with the term as parameter
    }
  }
}
