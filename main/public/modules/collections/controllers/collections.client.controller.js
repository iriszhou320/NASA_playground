'use strict';

// Collections controller
angular.module('collections').controller('CollectionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Collections',
	function($scope, $stateParams, $location, Authentication, Collections) {
		$scope.authentication = Authentication;

		// Create new collection
		$scope.create = function() {
			// Create new collection object
			var collection = new Collections ({
				name: this.name,
				description: this.description,
				images:$push(this.images),
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