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
		type:[String]
	},
	created:{
		//can not be an array
		type: Date,
		default: Date.now
	},
	rating:{
		type: Number,
		default:0,
	}
});

mongoose.model('Collection', CollectionSchema);