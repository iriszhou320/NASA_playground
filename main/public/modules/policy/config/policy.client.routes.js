'use strict';

//Setting up route
angular.module('policy').config(['$stateProvider',
	function($stateProvider) {
		// Policy state routing
		$stateProvider.
		state('admin', {
			url: '/admin',
			templateUrl: 'modules/policy/views/admin.client.view.html'
		}).
		state('dmca', {
			url: '/dmca',
			templateUrl: 'modules/policy/views/dmca.client.view.html'
		}).
		state('show-policy', {
			url: '/policy',
			templateUrl: 'modules/policy/views/show-policy.client.view.html'
		});
	}
]);