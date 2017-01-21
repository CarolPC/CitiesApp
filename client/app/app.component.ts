import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [CitiesService]
})
export class AppComponent { }
