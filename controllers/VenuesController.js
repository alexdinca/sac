'use strict';
angular.module('sacApp').controller('VenuesController', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
        $scope.venues = {
            "totalRows": 10,
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
                "tbl_assignments": ""
            }, {
                "__metadata": {
                    "id": "2",
                    "descriptives": {
                        "id_user": {
                            "label": "admin",
                            "value": "1"
                        },
                        "tbl_assignments": {
                            "label": "funkylounge, cata, catacata",
                            "value": "2,13,15"
                        }
                    },
                    "dates": {}
                },
                "id_user": "1",
                "id_venue": 2,
                "name": "Bamboo Bucharest",
                "currency": "RON",
                "description": "Cu un nume mare in Europa Bamboo Club Bucuresti este un club de noapte perfect pentru nightlife si distractie in Bucuresti datorita evenimentelor unice.",
                "timestamp": 1401124857,
                "latitude": null,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/2/bamboo.jpg",
                "tbl_assignments": "2,13,15"
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
                "tbl_assignments": ""
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
                "tbl_assignments": ""
            }, {
                "__metadata": {
                    "id": "8",
                    "descriptives": {
                        "id_user": {
                            "label": "admin",
                            "value": "1"
                        },
                        "tbl_assignments": {
                            "label": "doru, cata",
                            "value": "11,13"
                        }
                    },
                    "dates": {}
                },
                "id_user": "1",
                "id_venue": 8,
                "name": "Bavarian Beerhouse London",
                "currency": "ron",
                "description": "Since  the Bavarian Beerhouse opened its doors in 2005, we have welcomed around 1 million happy customers from locals to city workers.",
                "timestamp": 1413403866,
                "latitude": 44.442501068115234,
                "longitude": 26.1476993560791,
                "radius": 1000.0,
                "logo": "data/venuesLogos/8/bavaria.png",
                "tbl_assignments": "11,13"
            }, {
                "__metadata": {
                    "id": "10",
                    "descriptives": {
                        "id_user": {
                            "label": "deneka",
                            "value": "3"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "3",
                "id_venue": 10,
                "name": "Calif",
                "currency": "RON",
                "description": "Calif este primul Kebab Boutique din Romania care ofera o bucatarie orientala de bun gust: gatim numai cu ingrediente proaspete si naturale, iar toate specialitatile noastre sunt preparate cu grija in centrul propriu de productie.",
                "timestamp": 1416353364,
                "latitude": null,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/10/logo_calif.png",
                "tbl_assignments": ""
            }, {
                "__metadata": {
                    "id": "11",
                    "descriptives": {
                        "id_user": {
                            "label": "casavera",
                            "value": "9"
                        },
                        "tbl_assignments": {
                            "label": "dragos, flori",
                            "value": "10,12"
                        }
                    },
                    "dates": {}
                },
                "id_user": "9",
                "id_venue": 11,
                "name": "Casa Vera",
                "currency": "RON",
                "description": "SUNTEM INCA IN PERIOADA DE TEST! Indiferent de situatie, de persoanele de care sunteti insotiti am fi bucurosi sa va avem drept oaspeti. Casa Vera este locul in care va simtiti bine fie ca popositi pentru o masa copioasa sau doar pentru o cafea cu lapte.",
                "timestamp": 1427208173,
                "latitude": 44.479698181152344,
                "longitude": 26.110300064086914,
                "radius": 200.0,
                "logo": "data/venuesLogos/11/casa-vera-logo.png",
                "tbl_assignments": "10,12"
            }, {
                "__metadata": {
                    "id": "12",
                    "descriptives": {
                        "id_user": {
                            "label": "funkylounge",
                            "value": "2"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "2",
                "id_venue": 12,
                "name": "Funky Lounge Decebal",
                "currency": "RON",
                "description": "GOURMET,CITYLIFE, ENTERTAINMENT",
                "timestamp": 1430935307,
                "latitude": 44.428798675537109,
                "longitude": 26.132900238037109,
                "radius": 100000.0,
                "logo": "data/venuesLogos/12/389945_319299128093792_408465140_n.jpg",
                "tbl_assignments": ""
            }, {
                "__metadata": {
                    "id": "13",
                    "descriptives": {
                        "id_user": {
                            "label": "funkylounge",
                            "value": "2"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "2",
                "id_venue": 13,
                "name": "Funky Lounge Herastrau",
                "currency": "RON",
                "description": "",
                "timestamp": 1430935589,
                "latitude": null,
                "longitude": null,
                "radius": 50.0,
                "logo": "data/venuesLogos/13/389945_319299128093792_408465140_n.jpg",
                "tbl_assignments": ""
            }, {
                "__metadata": {
                    "id": "14",
                    "descriptives": {
                        "id_user": {
                            "label": "marius",
                            "value": "14"
                        },
                        "tbl_assignments": {
                            "label": "",
                            "value": ""
                        }
                    },
                    "dates": {}
                },
                "id_user": "14",
                "id_venue": 14,
                "name": "Boutique du Pain AFI",
                "currency": "RON",
                "description": "Boutique du pain este un french bistro foarte chic unde te poti refugia la orice ora sa degusti bucataria franceza si sa te bucuri de atmosfera placuta.",
                "timestamp": 1445348370,
                "latitude": null,
                "longitude": null,
                "radius": null,
                "logo": "data/venuesLogos/14/boutiquedupain.png",
                "tbl_assignments": ""
            }]
        };
    }
]);