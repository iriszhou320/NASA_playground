'use strict';

// Collections controller
angular.module('collections').controller('CollectionsController', ['$scope','$window','$rootScope','$http', '$stateParams', '$location', 'Authentication', 'Collections',
	function($scope, $window,$rootScope, $http, $stateParams, $location, Authentication, Collections) {
		$scope.authentication = Authentication;
		   //global variable to pass the image urls
           var x = "hey"; 
           
           //functions to show full image
           $scope.showFull = function(){
           	console.log(this.imageUrl);
           	window.location=this.imageUrl;
           }
           
           //add routing
            $scope.add = function(){
            $rootScope.x=this.imgurl;
            //test
            console.log($rootScope.x);
			console.log("click");
			$location.url('/collections/add');
		}
		
		   //add images to the current collection
            $scope.addTo = function(collection){
            	//achych solution 
            	$scope.$evalAsync(function(){
            		console.log($scope.collection.name);
            		console.log($scope.collection._id);
            		console.log($rootScope.x);
            		$scope.collection.images.push($rootScope.x);  
           
			$http.put('/collections/'+$scope.collection._id, $scope.collection)
			.then(function(response){
				console.log(response.data.images);
			})
            	
        	})
        }
			$scope.search = function(){
			//search by keywords
			$http.get('https://images-api.nasa.gov/search?q='+$scope.keyword).then(function(response){
			//init
			$scope.imgurls=[String];
		    //loop thru the Items
			var length = response.data.collection.items.length;
				for(var i = 1; i<length; i++){
					$scope.imgurls.push(response.data.collection.items[i].links["0"].href);
			}
			//shift one to pop the first empty element
			$scope.imgurls.shift();
			
			})
		};
		
 
        //show images
        $scope.showImage = function(){
         //create a new array of string
       
        var collection = $scope.collection;
        $scope.imageUrls=[String];	
        for(var i =0; i<collection.images.length; i++){
        	$scope.imageUrls.push(collection.images[i])
        }
        $scope.imageUrls.shift();
        };
        
		// Create new collection
		$scope.create = function() {
			// Create new collection object
			var collection = new Collections ({
				name: this.name,
				description: this.description,
				images:this.images,
				visibility:this.visibility,
				rating:this.rating,
			});
			
			
		   // Redirect after save
			collection.$save(function(response) {
				$location.path('collections/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Collection
		$scope.remove = function(collection) {
			if ( collection ) { 
				collection.$remove();

				for (var i in $scope.collections) {
					if ($scope.collections [i] === collection) {
						$scope.collections.splice(i, 1);
					}
				}
			} else {
				$scope.collection.$remove(function() {
					$location.path('collections');
				});
			}
		};

		// Update existing collection
		$scope.update = function() {
			var collection = $scope.collection;

			collection.$update(function() {
				$location.path('collections/' + collection._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of collections
		$scope.find = function() {
			$scope.collections = Collections.query();
		};

		// Find existing collection
		$scope.findOne = function() {
			$scope.collection = Collections.get({ 
				collectionId: $stateParams.collectionId
			});
		};
	}
]);