angular.module('mainController',['dbServices'])
        .controller('mainCtrl',function($scope,db, $log, $filter, $location, $interval){
          $scope.gameData = [];
          db.getData().then(function(result){
            $scope.gameData = result.data;
            $scope.optData = $scope.gameData.ponudjene;
            $scope.count = $scope.gameData.vreme;
          var stop = $interval(function(){
            if($scope.count > 0){
              $scope.count--;
            }else{
              $scope.sendData();
              $interval.cancel(stop);
              $location.path("/rez");
            }
           },1000);

              },function(err){
            console.log(err.status);
        })

        $scope.arrName = [];
        $scope.addName = function(){
              $scope.arrName.push($scope.name)
              $scope.name = "";
          };
        $scope.delArr = function($index){
          $scope.arrName.splice($index,1)
        }
        $scope.sendData = function(){
          db.setData($scope.arrName);
        }
      })
