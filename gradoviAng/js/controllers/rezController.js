angular.module('rezController',['dbServices'])
        .controller('rezCtrl',function($scope,db,$log,$filter){
          $scope.newdata = db.getNewData();
          $filter('uppercase')($scope.newdata)

          db.getData().then(function(result){
          $scope.gameData = result.data;
          $scope.tacno = $scope.gameData.tacno;
          $filter('uppercase')($scope.gameData.tacno)
          $log.info($scope.tacno);
          $log.info($scope.newdata);
          $scope.rez = 0;
          for(var i = 0; i<$scope.newdata.length; i++){
         if($scope.newdata[i]===$scope.tacno[0] || $scope.newdata[i]===$scope.tacno[1] || $scope.newdata[i]===$scope.tacno[2] || $scope.newdata[i]===$scope.tacno[3]){
          $scope.rez++;
          $log.info($scope.rez);

           }
         }
          $scope.reza = $scope.rez;
          $scope.ukup = $scope.newdata.length;
          $scope.procent = $scope.reza / $scope.ukup * 100;
          $scope.proc = Math.floor($scope.procent);
          $log.info($scope.proc);

          $scope.piksel = $scope.proc * 8;
          $log.info($scope.piksel);
        })

      })
