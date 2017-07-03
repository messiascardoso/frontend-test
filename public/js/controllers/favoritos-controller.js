angular.module('netflix').controller('FavoritosCtrl',
    function ($scope, $stateParams, Filme, SharedProperties) {

       $scope.filmesFavoritos = JSON.parse(sessionStorage.getItem("Favoritos"))
                   
        //Remove Favorito
        $scope.removeFavorito = function (favorito) {
            var filmes = $scope.filmesFavoritos;
            var pos = filmes.filter(function(element){
                return element.show_id != favorito.show_id;
            });
            $scope.filmesFavoritos = pos;
            sessionStorage.setItem("Favoritos", JSON.stringify(pos));
        };

    });