'use strict';

//Setting up route
angular.module('collections').config(['$stateProvider',
	function($stateProvider) {
		// Collections state routing
		$stateProvider.
		state('add-collection', {
			url: '/collections/add',
			templateUrl: 'modules/collections/views/add-collection.client.view.html'
		}).
		state('create-collection', {
			url: '/collections/create',
			templateUrl: 'modules/collections/views/create-collection.client.view.html'
		}).
		state('collections', {
			url: '/collections',
			templateUrl: 'modules/collections/views/collections.client.view.html'
		}).
		state('viewCollection',{
			url: '/collections/:collectionId',
			templateUrl: 'modules/collections/views/view-collection.client.view.html'
		}).
		state('editCollection', {
			url: '/collections/:collectionId/edit',
			templateUrl: 'modules/collections/views/edit-collection.client.view.html'
		})
	}
]);