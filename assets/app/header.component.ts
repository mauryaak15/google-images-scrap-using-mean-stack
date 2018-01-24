import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <ul class="nav nav-pills">
            <li routerLinkActive="active" [routerLink]="['/search']"><a>Search</a></li>
            <li routerLinkActive="active" [routerLink]="['/recent']"><a>Recent Searches</a></li>
            <li routerLinkActive="active" [routerLink]="['/results']"><a>Results</a></li>
        </ul>
    `
})

export class HeaderComponent {
    
}
