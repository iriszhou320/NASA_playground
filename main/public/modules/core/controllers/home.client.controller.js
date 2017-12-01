'use strict';


angular.module('core').controller('HomeController', ['$scope','$location', '$http','Authentication',
	function($scope,$location,$http, Authentication) {
		// this provides Authentication context.
		$scope.authentication = Authentication;
	}
]);