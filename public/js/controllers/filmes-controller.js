angular.module('netflix').controller('FilmesCtrl',
    function ($scope, $stateParams,Filme) {

        $scope.query = 'Quentin';
        $scope.filtro = '';

        //  Lista de Ofertas
        Filme.List($scope.query)
            .success(function (data) {
                $scope.filmes = data;
                console.log(data);
            })
            .error(function (error) {
                console.log(error)
             
            });



    










    })


  

  



