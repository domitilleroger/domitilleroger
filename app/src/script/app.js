// Crée un module
var app = angular.module('app', []);

app.controller('appController', function($scope){
	$scope.events 				= events;
	$scope.filterBy = { 
		'type' : 'none',
		'tags' : ['Technologie', 'Créativité', 'Communication', 'Marketing']
	};
});