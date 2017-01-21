import { Component } from '@angular/core'
import { CitiesService } from '../../services/cities.service'
import { City } from '../../../City'

@Component({
    selector: 'cities',
    templateUrl: 'app/components/cities/cities.component.html',
    providers: [CitiesService],
})

export class CitiesComponent {
    cities: City[];

    constructor(private citiesService:CitiesService) {
        this.citiesService.getCities()
            .subscribe(cities => {
                this.cities = cities;
            });
    }
}
