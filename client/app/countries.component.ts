import { Component } from 'angular2/core'
import { CountriesService } from './countries.service'

@Component({
    selector: 'countries',
    template: `
        <h2>Countries</h2>
        {{ title }}
        <ul>
            <li *ngFor="#country of countries">
                {{ country }}
            </li>
        </ul>
    `,
    providers: [CountriesService]
})

export class CountriesComponent {
    title = "The title of countries page";
    countries;

    constructor(countriesService : CountriesService) {
        this.countries = countriesService.getCountries();
    }
}
