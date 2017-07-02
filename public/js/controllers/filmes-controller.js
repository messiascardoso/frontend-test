angular.module('netflix').controller('FilmesCtrl',
    function ($scope, $stateParams, Filme) {

        $scope.lista = 'Quentin';
        $scope.query = {};
        $scope.filtro = '';
        $scope.filmes = [];

        //  Lista de Ofertas
        Filme.List($scope.lista)
            .success(function (data) {
                $scope.filmes = data;
                console.log(data);
            })
            .error(function (error) {
                console.log(error)
            });

        // função para enviar o formulário depois que a validação estiver ok           
        $scope.submitForm = function (isValid) {
            // verifica se o formulário é válido
            if (isValid) {
                Filme.Busca($scope.query.categoria, $scope.query.nome)
                    .success(function (data) {
                        if (data.length > 1) {
                            $scope.filmes = data;
                        } else {
                            $scope.filmes = new Array(data);
                        }
                        console.log($scope.filmes);
                    })
                    .error(function (error) {
                        console.log(error)
                    });
            }

        };


      












    })








