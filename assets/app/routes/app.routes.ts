import { Routes, RouterModule } from '@angular/router';
import { SearchesComponent } from '../searches.component';
import { InputComponent } from '../input.component';
import { ResultsComponent } from '../results.component';
import { ErrorComponent } from '../error.component';
const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'},
    {path: 'recent', component: SearchesComponent},
    {path: 'results', pathMatch: 'full', component: ResultsComponent, data: { msg: 'Please choose query from recent tab first' } },
    {path: 'results/:folder', component: ResultsComponent, pathMatch: 'full'},
    {path: 'search', component: InputComponent},
    {path: '**', component: ErrorComponent}    
];

export const routing = RouterModule.forRoot(APP_ROUTES);