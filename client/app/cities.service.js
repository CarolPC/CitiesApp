System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CitiesService;
    return {
        setters:[],
        execute: function() {
            CitiesService = (function () {
                function CitiesService() {
                }
                CitiesService.prototype.getCities = function () {
                    return ["Amsterdam", "Eindhoven", "Rotterdam"];
                };
                return CitiesService;
            }());
            exports_1("CitiesService", CitiesService);
        }
    }
});
//# sourceMappingURL=cities.service.js.map