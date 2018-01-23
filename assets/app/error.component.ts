import { Component } from '@angular/core';

@Component({
    selector: 'my-error',
    template: `
            <div class="jumbotron">
                <h1>404 Not found</h1> 
                <p>Please use navigation tabs</p> 
            </div>
    `
})
export class ErrorComponent {
    constructor(){
    }
      
}