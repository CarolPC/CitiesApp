import { Component } from '@angular/core'
import { CitiesService } from '../../services/cities.service'
import { City } from '../../../City'

@Component({
    selector: 'cities',
    templateUrl: 'app/components/cities/cities.component.html'
})

export class CitiesComponent {
    cities: City[];
    name: string;
    isVisited: boolean;

    constructor(private citiesService : CitiesService) {
        this.citiesService.getCities()
            .subscribe(cities => {
                this.cities = cities;
            });
    }

    addCity(event) {
        event.preventDefault();
        const newCity = {
            name: this.name,
            isVisited: false
        }

        this.citiesService.addCity(newCity)
            .subscribe(city => {
                this.cities.push(city);
                this.name = '';
            });

    }

    deleteCity(city) {
        const cities = this.cities;

        this.citiesService.deleteCity(city).subscribe(data => {
            cities.splice(cities.indexOf(city));
        })
    }
}
