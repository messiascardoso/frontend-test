angular.module('netflix').controller('FilmeDetalheCtrl',
    function ($scope, $stateParams, Filme, SharedProperties) {

           
       $scope.filme = SharedProperties.getProperty();
        $scope.mensagem = '';
                  
           
        //Salva favorito
        $scope.setFavoritos = function (filme) {
             var favoritos =[]; 
            // Get user Storage
             var valorSessionStorage = JSON.parse(sessionStorage.getItem("Favoritos"));
             if(valorSessionStorage === null){
                favoritos.push(filme);
                //Grava no storage local do device
                sessionStorage.setItem("Favoritos", JSON.stringify(favoritos));
                 $scope.mensagem = 'Salvo com sucesso!';
             }else{
                 valorSessionStorage.push(filme);
                //Grava no storage local do device
                sessionStorage.setItem("Favoritos", JSON.stringify(valorSessionStorage));
                $scope.mensagem = 'Salvo com sucesso!';
             }
           
        };  

        // Apaga mensagem  
        $scope.CloseMensagem = function(){
           $scope.mensagem = '';
        };

    });