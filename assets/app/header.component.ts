import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <ul class="nav nav-pills">
            <li><a routerLinkActive="active" [routerLink]="['/search']">Search</a></li>
            <li><a routerLinkActive="active" [routerLink]="['/recent']">Recent Searches</a></li>
            <li><a routerLinkActive="active" [routerLink]="['/results']">Results</a></li>
        </ul>
    `
})

export class HeaderComponent {
    
}