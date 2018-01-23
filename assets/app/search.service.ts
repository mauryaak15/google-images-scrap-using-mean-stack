import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    constructor(private http: Http) {}
    scrapImagesAndStore(query: string) {
        return this.http.get(`http://localhost:3000/search/${query}`)
                    .map((res: Response) => {
                        return res.json();
                    })
                    .catch((err: Response) => Observable.throw(err.json()));
    }
    fetchKeywords() {
        return this.http.get(`http://localhost:3000/getRecentQueries`)
                    .map((res: Response) => {
                        return res.json();
                    })
                    .catch((err: Response) => Observable.throw(err.json()));
    }

    fetchImagesUrl(query: string) {
        return this.http.get(`http://localhost:3000/recent/${query}`)
                    .map((res: Response) => {
                        return res.json();
                    })
                    .catch((err: Response) => Observable.throw(err.json()));
    }
}