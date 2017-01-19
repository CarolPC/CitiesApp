System.register(['angular2/core', './countries.service'], function(exports_1, context_1) {
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
    var core_1, countries_service_1;
    var CountriesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (countries_service_1_1) {
                countries_service_1 = countries_service_1_1;
            }],
        execute: function() {
            CountriesComponent = (function () {
                function CountriesComponent(countriesService) {
                    this.title = "The title of countries page";
                    this.countries = countriesService.getCountries();
                }
                CountriesComponent = __decorate([
                    core_1.Component({
                        selector: 'countries',
                        template: "\n        <h2>Countries</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor=\"#country of countries\">\n                {{ country }}\n            </li>\n        </ul>\n    ",
                        providers: [countries_service_1.CountriesService]
                    }), 
                    __metadata('design:paramtypes', [countries_service_1.CountriesService])
                ], CountriesComponent);
                return CountriesComponent;
            }());
            exports_1("CountriesComponent", CountriesComponent);
        }
    }
});
//# sourceMappingURL=countries.component.js.map