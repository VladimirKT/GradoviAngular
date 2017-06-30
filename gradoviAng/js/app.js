angular.module("main",[
                     "ngRoute",
                      'mainController',
                      'dbServices',
                      'rezController',
                      'ngAnimate'
                    ])
            .config(function($routeProvider,$locationProvider){
            $locationProvider.hashPrefix("");
            $routeProvider
            .when('/',{
            templateUrl : "pages/main.html",
            controller : "mainCtrl"
            })
            .when('/rez',{
            templateUrl : "pages/rez.html",
            controller : "rezCtrl"
           })
         })
