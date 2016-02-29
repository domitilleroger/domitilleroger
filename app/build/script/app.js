// Crée un module
var app = angular.module('app', []);

app.controller('appController', function($scope){
	$scope.events = events;
    $scope.orderBy = true;
	$scope.filterBy = { 
		'types' : [''],
		'tags' : ['Technologie']
	};

    $scope.changeFilterByTypes = function(type) {
        $scope.filterBy.types = [''];
        if(type){
            $scope.filterBy.types.push(type);
        }
    }

    $scope.changeOrderBy = function(order){
        $scope.orderBy = order;
    }
});

app.filter('filterByTags', function () {
    return function (events, tags) {
        var filtered = []; 

        (events || []).forEach(function (event) { 
            var matches = tags.every(function (tag) {
                return (event.tags.indexOf(tag) > -1);
            });
            if (matches) {
                filtered.push(event); 
            }
        });

        return filtered;
    };
}); 

app.filter('filterByTypes', function () {
    return function (events, types) {
        var filtered = [];

        events.forEach(function (event) {
            var matches = types.every(function (type) {
                return (event.type.indexOf(type) > -1);
            });
            if (matches) {
                filtered.push(event); 
            }

        });

        return filtered;
    };
}); 