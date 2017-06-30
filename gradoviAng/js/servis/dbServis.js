angular.module('dbServices',[])
        .service('db',function($http){
          var self = this
          this.getData = function(){
            return $http({
              method : "get",
              url : "db/podaci.json"
            })
          }


    // Funkcija za postavljanje podataka
    this.setData = function  (arr) {
      self.sharedData = arr;
    }
    // Funkcija koja vraca podatke onome ko trazi, tj rezCtrl-u
    this.getNewData = function () {
      return self.sharedData;
    }
       })
