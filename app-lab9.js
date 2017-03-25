/**
 * Created by Niyas on 12/12/2016.
 */
var angularApp = angular.module('angularApp', []);

//Directives - An instruction to AngularJS to manipulate a piece of the DOM. This could be 'Add a Class', 'Hide this', 'Create this', etc.

angularApp.controller('mainController', ['$scope','$filter',function ($scope, $filter) {

    // defined the handle as empty. the angularJS' ng-model will do the 2 way binding of updating the below $scope.handle and display it in the html in the place of {{handle}}
	// angularJS basically add 'handle' and  'lowercasehandle' to watcher and digest loop (concept is javascript eventListener - refer Lab7)
    $scope.handle = '';

    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used anywhere else"},
        {rulename: "Must be cool"}
    ];

    console.log($scope.rules);

    $scope.alertClick = function(){
      alert("Clicked!!")
    };

}]);