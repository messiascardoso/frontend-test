angular.module('netflix').controller('FilmeDetalheCtrl',
    function ($scope, $stateParams, Filme, SharedProperties) {

           
       $scope.filme = SharedProperties.getProperty();
       console.log(SharedProperties.getProperty()); 
        
        //Get filme selecionado
        $scope.getFilmeSelected = function () {
           
           
        };

    });