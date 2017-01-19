import { Component } from 'angular2/core'
import { CitiesService } from './cities.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
    selector: 'cities',
    template: `
        <h2>Cities</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#city of cities">
            {{ city }}
            </li>
        </ul>
    `,
    providers: [CitiesService],
    directives: [AutoGrowDirective]
})

export class CitiesComponent {
    title = "The title of cities page";
    cities;

    constructor(citiesService : CitiesService) {
        this.cities = citiesService.getCities();
    }
}
