import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-results',
    templateUrl: './results.component.html',
    styles: ['a{text-decoration: none;}']
})
export class ResultsComponent implements OnInit {
    links = [];
    folder: string;
    msg = '';
    constructor(private searchService: SearchService, private route: ActivatedRoute){
    }

    ngOnInit(): void {
        this.folder = this.route.snapshot.params['folder'];
        this.route.params.subscribe((params) => {
            this.folder = params['folder'];
            console.log(`folder: ${this.folder}`);
        });
        this.msg = this.route.snapshot.data['msg'];
        this.route.data.subscribe((data) => {
            this.msg = data['msg'];
            console.log(`msg: ${this.msg}`);
        });
        this.searchService.fetchImagesUrl(this.folder).subscribe((res) => {
            this.links = res.obj;
        }, (err) => {
            this.msg = err.error.message;
            alert(err.title);
        });
    }   
}