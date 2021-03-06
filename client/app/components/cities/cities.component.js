System.register(['@angular/core', '../../services/cities.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cities_service_1;
    var CitiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cities_service_1_1) {
                cities_service_1 = cities_service_1_1;
            }],
        execute: function() {
            CitiesComponent = (function () {
                function CitiesComponent(citiesService) {
                    var _this = this;
                    this.citiesService = citiesService;
                    this.citiesService.getCities()
                        .subscribe(function (cities) {
                        _this.cities = cities;
                    });
                }
                CitiesComponent.prototype.addCity = function (event) {
                    var _this = this;
                    event.preventDefault();
                    var newCity = {
                        name: this.name,
                        isVisited: false
                    };
                    this.citiesService.addCity(newCity)
                        .subscribe(function (city) {
                        _this.cities.push(city);
                        _this.name = '';
                    });
                };
                CitiesComponent.prototype.deleteCity = function (city) {
                    var cities = this.cities;
                    this.citiesService.deleteCity(city).subscribe(function (data) {
                        cities.splice(cities.indexOf(city));
                    });
                };
                CitiesComponent = __decorate([
                    core_1.Component({
                        selector: 'cities',
                        templateUrl: 'app/components/cities/cities.component.html'
                    }), 
                    __metadata('design:paramtypes', [cities_service_1.CitiesService])
                ], CitiesComponent);
                return CitiesComponent;
            }());
            exports_1("CitiesComponent", CitiesComponent);
        }
    }
});
//# sourceMappingURL=cities.component.js.map