var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemData = new Schema({
	name: String,
	description: String,
    location: {
	    type: [Number],  // [<longitude>, <latitude>]
	    index: '2d'      // create the geospatial index
    },
    category: String
});

var itemData = mongoose.model('itemData', ItemData);

module.exports = itemData;