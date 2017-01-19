import { Component } from 'angular2/core';
import { CitiesComponent } from './cities.component'
import { CountriesComponent } from './countries.component'

@Component({
    selector: 'my-app',
    template: `<h1>My Cities</h1>
                <cities></cities>
                <countries></countries>`,
    directives: [CitiesComponent, CountriesComponent]
})
export class AppComponent { }
