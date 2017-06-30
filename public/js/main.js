


angular.module('netflix', ['ngResource','ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', '$httpProvider',
        function ($urlRouterProvider, $stateProvider, $httpProvider, Profile, RouteAccessService) {
                
                $stateProvider
                 
                .state('layout', {
                    url: '',
                    abstract: true,
                    templateUrl: 'partials/layout.html',
                    controller: ''
                })

                 .state('layout.list', {
                    url: '/list',
                    templateUrl: 'partials/list-filmes.html',
                    controller: ''
                })

                



            $urlRouterProvider.otherwise('/list');


        }]);

