import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from './search.service';
import { Response } from '@angular/http';

@Component({
    selector: 'my-input',
    templateUrl: './input.component.html'
})
export class InputComponent {
   myForm: FormGroup;
    constructor(private searchService: SearchService) {}
   flag = true;
   onSubmit() {
    this.flag = false;
    console.log(this.myForm.value);
    this.searchService.scrapImagesAndStore(this.myForm.value.query).subscribe((res) => {
        console.log('hello');
        this.flag = true;
        console.log('hereq');
        alert(res.message);
        this.myForm.reset();
    }, (err) => {
        this.flag = true;
        console.log('here');
        alert(err.title);
    });
   }
   ngOnInit(): void {
    this.myForm = new FormGroup({
        query: new FormControl(null, Validators.required)
    });
}
}