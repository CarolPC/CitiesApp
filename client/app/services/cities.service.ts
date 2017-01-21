import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {

    constructor(private http:Http) {
        console.log('Cities Service initialized');
    }

    getCities() {
        return this.http.get('http://localhost:3000/api/cities')
            .map(res => res.json());
    }

    addCity(newCity) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(
            'http://localhost:3000/api/cities',
            JSON.stringify(newCity),
            {headers: headers}
        )
        .map(response => response.json());
    }
}
