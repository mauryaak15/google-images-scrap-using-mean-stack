import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import { ImageComponent } from './image.component';
import { SearchesComponent } from './searches.component';
import { HeaderComponent } from "./header.component";
import { ResultsComponent } from "./results.component";
import { ErrorComponent } from './error.component';
import { SearchService } from './search.service';
import { HttpModule } from '@angular/http';
import { routing } from './routes/app.routes';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent,
        ImageComponent,
        SearchesComponent,
        HeaderComponent,
        ResultsComponent,
        ErrorComponent
    ],
    providers: [SearchService],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}