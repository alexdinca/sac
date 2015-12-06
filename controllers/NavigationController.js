'use strict';

angular.module('sacApp')

.controller('NavigationController',
    ['$scope', '$rootScope', '$location', 
    function ($scope, $rootScope, $location) {
        $scope.links = [
            {
                title: 'Main',
                href: '#/'
            },
            {
                title: 'Search',
                href: '#/venues'
            },
            {
                title: 'Dashboard',
                href: '#/dashboard'
            }
        ];
    }]);