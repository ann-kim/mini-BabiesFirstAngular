var appModule = angular.module('friendsList'); //Get module created in app.js

//Create new controller and stick is as a property on our friendsList app

//Controller Explained: named mainCtrl b/c that was name chosen in ng-controller in index.html; function is a callback function w/$scope property built-in; whenever you create a new controller you get this $scope object; whatever you stick on $scope will be available in our view (which is index.html in this case); Telling module about controller and not Angular
appModule.controller('mainCtrl', function($scope){ 
	$scope.friends = ['Lyn', 'Kelly', 'Kim', 'Kelli', 'Melanie', 'Kathy'];
});

var addFriend = function() {

};
