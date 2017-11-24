'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Collection Schema
 */
var CollectionSchema = new Schema({
	// Collection model fields   
	// ...
	name:{
		type: String,
		default: " ",
	},
	
	description:{
		type: String,
		default: " ",
	},
	visibility: {
		type: String,
		default: "private",
	},
	//for store images
	images: {
		data: Buffer,
		contentType: String,
	},
	created:{
		type: Date,
		default: Date.now
	}
});

mongoose.model('Collection', CollectionSchema);