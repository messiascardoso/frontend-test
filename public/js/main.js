


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
                    controller: 'FilmesCtrl'
                })

                 .state('layout.list/:filmeId', {
                    url: '/list/:filmeId',
                    templateUrl: 'partials/filme-detalhe.html',
                    controller: 'FilmeDetalheCtrl'
                })

                .state('layout.favoritos', {
                    url: '/favoritos',
                    templateUrl: 'partials/favoritos.html',
                    controller: 'FavoritosCtrl'
                });

            $urlRouterProvider.otherwise('/list');


        }]);

