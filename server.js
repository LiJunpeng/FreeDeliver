var express = require("express");
var app = express();
//var restRouter = require('./routes/rest');
var mongoose = require('mongoose');
var dbLink = require('./db_access');
var restRouter = require('./routes/restRouter');


mongoose.connect(dbLink.dbLink);

app.use('/api/V1/', restRouter);



// app.get('/', function (req, res){
    

// 	itemData.findOne({"name": "Central Park"}, function (err, data) {
// 		console.log("====>");
// 		if (data) {
// 			console.log("===> " + data);
// 		} else {
// 			console.log("????");
// 		}
// 	});


// });


app.listen(3000);



