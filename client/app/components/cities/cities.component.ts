import { Component } from '@angular/core'
import { CitiesService } from '../../services/cities.service'

@Component({
    selector: 'cities',
    templateUrl: 'app/components/cities/cities.component.html',
    providers: [CitiesService],
})

export class CitiesComponent {
    title = "The title of cities page";
    cities;

    constructor(private citiesService:CitiesService){
    }
}
