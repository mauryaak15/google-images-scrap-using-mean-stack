import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'my-searches',
    templateUrl: './searches.component.html'
})
export class SearchesComponent implements OnInit {
    
    searches = [];
    constructor(private searchService: SearchService) {}

    ngOnInit(): void {
        this.searchService.fetchKeywords().subscribe((response) => {
            if(response.message) {
                console.log(response.obj);
                this.searches = response.obj;
            }
        });
    }
}