'use strict';

//Collections service used to communicate Collections REST endpoints
angular.module('collections').factory('Collections', ['$resource',
	function($resource) {
		return $resource('collections/:collectionId', { collectionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
			remove: {
				method: 'DELETE'
			}
		});
	}
]);