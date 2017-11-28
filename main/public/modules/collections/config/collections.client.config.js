'use strict';

// Configuring the Articles module
angular.module('collections').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Collections', 'collections', 'dropdown', '/collections(/create)?');
		Menus.addSubMenuItem('topbar', 'collections', 'List Collections', 'collections');
		Menus.addSubMenuItem('topbar', 'collections', 'New Collections', 'collections/create');
	}
]);