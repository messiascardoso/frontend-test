angular.module('netflix').service('Filme', function ($http, config) {
    
  
    this.List = function (director) {
        return $http.get(config.baseUrl+"?director="+director);
    };

    



});