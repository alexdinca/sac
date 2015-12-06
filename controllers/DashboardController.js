'use strict';
angular.module('sacApp').controller('DashboardController', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
        $scope.venues = {
            "totalRows": 3,
            "data": [{
                "__metadata": {
                    "id": "1",
                    "descriptives": {
                        "id_user": {
                            "label": "admin",
                            "value": "1"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "1",
                "id_venue": 1,
                "name": "IDM Club",
                "currency": "RON",
                "description": "In sfarsit un club civilizat unde va puteti simti bine. Accesul in zona exclusiva este rezervat doar membrilor si este restrictionat electronic. Parcarea este pazita si gratuita.",
                "timestamp": 1401115092,
                "latitude": null,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/1/IDM.jpg",
                "tbl_assignments": "",
                "rate": 10,
                "comment": "Best fun place in town!"
            }, {
                "__metadata": {
                    "id": "4",
                    "descriptives": {
                        "id_user": {
                            "label": "admin",
                            "value": "1"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "1",
                "id_venue": 4,
                "name": "Casa Vera",
                "currency": "Ron",
                "description": "Indiferent de situatie, de persoanele de care sunteti insotiti am fi bucurosi sa va avem drept oaspeti. Casa Vera este locul in care va simtiti bine fie ca popositi pentru o masa copioasa sau doar pentru o cafea cu lapte.",
                "timestamp": 1402668364,
                "latitude": 232.0,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/4/casa vera.jpg",
                "tbl_assignments": "",
                "rate": 8,
                "comment": "Low prices, ate a whole lot of food, still feel full"
            }, {
                "__metadata": {
                    "id": "7",
                    "descriptives": {
                        "id_user": {
                            "label": "admin",
                            "value": "1"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "1",
                "id_venue": 7,
                "name": "La Mama",
                "currency": "RON",
                "description": "La mama s-a nascut pe 27 februarie 1999, dintr-o idee simpla, aceea de a transforma mancatul in oras dintr-un lux intr-o normalitate.",
                "timestamp": 1413400744,
                "latitude": null,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/7/la mama.jpg",
                "tbl_assignments": "",
                "rate": 6.5,
                "comment": "Prices are pretty high and our waiter took a whole lot of time to just bring us the menus.."
            }]
        };
    }
]);