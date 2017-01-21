System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var CitiesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            CitiesService = (function () {
                function CitiesService(http) {
                    this.http = http;
                    console.log('Cities Service initialized');
                }
                CitiesService.prototype.getCities = function () {
                    return this.http.get('http://localhost:3000/api/cities')
                        .map(function (res) { return res.json(); });
                };
                CitiesService.prototype.addCity = function (newCity) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:3000/api/cities', JSON.stringify(newCity), { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                CitiesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CitiesService);
                return CitiesService;
            }());
            exports_1("CitiesService", CitiesService);
        }
    }
});
//# sourceMappingURL=cities.service.js.map