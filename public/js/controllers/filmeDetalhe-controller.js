angular.module('netflix').controller('FilmeDetalheCtrl',
    function ($scope, $stateParams, Filme, SharedProperties) {

           
       $scope.filme = SharedProperties.getProperty();
    //    console.log(SharedProperties.getProperty()); 
                  
           
        //Salva favorito
        $scope.setFavoritos = function (filme) {
             var favoritos =[]; 
            // Get user Storage
             var valorSessionStorage = JSON.parse(sessionStorage.getItem("Favoritos"))
             if(valorSessionStorage === null){
                favoritos.push(filme);
                //Grava no storage local do device
                sessionStorage.setItem("Favoritos", JSON.stringify(favoritos));
                console.log("IF valorSessionStorage:",JSON.parse(sessionStorage.getItem("Favoritos")));
             }else{
                 valorSessionStorage.push(filme);
                //Grava no storage local do device
                sessionStorage.setItem("Favoritos", JSON.stringify(valorSessionStorage));
                console.log(JSON.parse(sessionStorage.getItem("Favoritos")));
             }
           
        };

    });