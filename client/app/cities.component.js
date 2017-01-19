System.register(['angular2/core', './cities.service', './auto-grow.directive'], function(exports_1, context_1) {
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
    var core_1, cities_service_1, auto_grow_directive_1;
    var CitiesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cities_service_1_1) {
                cities_service_1 = cities_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CitiesComponent = (function () {
                function CitiesComponent(citiesService) {
                    this.title = "The title of cities page";
                    this.cities = citiesService.getCities();
                }
                CitiesComponent = __decorate([
                    core_1.Component({
                        selector: 'cities',
                        template: "\n        <h2>Cities</h2>\n        {{ title }}\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"#city of cities\">\n            {{ city }}\n            </li>\n        </ul>\n    ",
                        providers: [cities_service_1.CitiesService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
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