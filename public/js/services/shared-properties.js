angular.module('netflix').service('SharedProperties',function(){
    var property = {};    

    return{
        getProperty: function(){
            return property;
        },
        setProperty: function(value){
           property = value;
        }
    }

});

//Get valor atraves do Service sharedProperties
//var valorget = sharedProperties.getProperty();
//sharedProperties.setProperty(valor);
       

