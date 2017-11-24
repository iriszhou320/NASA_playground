'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Collection = mongoose.model('Collection'),
    _ = require('lodash');

/**
 * Create a Collection
 */
exports.create = function(req, res) {
 var collection = new Collection(req.body);

	collection.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.status(201).json(collection);
		}
	});
};

/**
 * Show the current Collection
 */
exports.read = function(req, res) {
Collection.findById(req.params.collectionId).exec(function(err, collection) {
		if (err) {
	      return res.status(400).send({
	          message: errorHandler.getErrorMessage(err)
	      });
      } else {
         if (!collection) {
				return res.status(404).send({
  					message: 'Collection not found'
  				});
			}
			res.json(collection);
      }
	});
};

/**
 * Update a Collection
 */
exports.update = function(req, res) {
   var collection = req.collection;
   
   collection = _.extend(collection, req.body);
   
   collection.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(collection);
		}
	});
  


};

/**
 * Delete an Collection
 */
exports.delete = function(req, res) {
  var collection = req.collection;
  
  collection.remove(function(err){
      if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(collection);
		}
  });
};

/**
 * List of Collections
 */
exports.list = function(req, res) {
Collection.find().exec(function(err, collections) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(collections);
        }
    });
};

/**
 * Category middleware
 */
exports.collectionByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Collection is invalid'
		});
	}

	Collection.findById(id).exec(function(err, collection) {
		if (err) return next(err);
		if (!collection) {
			return res.status(404).send({
  				message: 'Collection not found'
  			});
		}
		req.collection = collection;
		next();
	});
};