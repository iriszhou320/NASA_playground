'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http','Authentication',
	function($scope,$http, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		
		$scope.search = function(){
			//search by keywords
			console.log("on click");
			$http.get('https://images-api.nasa.gov/search?q='+$scope.keyword).then(function(response){
				console.log($scope.keyword)
				$scope.imgurls=[String]
				$scope.imgurls=['http://goo.gl/DPo6K7',
				'https://images-assets.nasa.gov/image/PIA05054/PIA05054~thumb.jpg',
				];
				
				// response=json(response)
			 })
			//.then(function(response){
			// 	$scope.pics.src=response.collection.items.href;
			// })
		}
	}
]);