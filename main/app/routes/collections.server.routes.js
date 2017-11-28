'use strict';

module.exports = function(app) {
	// Routing logic   
	var collections = require('../../app/controllers/collections.server.controller');
    var users = require('../../app/controllers/users.server.controller');
	
	app.route('/collections')
	  .get(collections.list)
	  .post(users.requiresLogin, collections.create);
	  
 	// the collectionId param is added to the params object for the request
	  app.route('/collections/:collectionId')
	  .get(collections.read)
	  .delete(users.requiresLogin,collections.delete)
	  .put(users.requiresLogin,collections.update);
	  
	  app.param('collectionId',collections.collectionByID);
};