var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var itemData = require('../models/itemData');


router.post('/items', jsonParser, function (req, res) {  // express将app强行加入req，因此可以通过req来访问app中的变量
//    var longUrl = req.body

});


router.get("/items/:id", function (req, res) {
	console.log(req.params.id);
	itemData.find({_id: req.params.id}, function (err, item) {
		res.json(item);
	}); 

});


router.get("/items", function (req, res) {



    var coords = [];
    coords[0] = req.query.longitude;
    coords[1] = req.query.latitude;

	console.log("=====> " + coords[0] + " " + coords[1]);

 	var limit = req.query.limit || 10;




var query = itemData.findOne({'location': {
  $near: [
    coords[0],
    coords[1]
  ],
  $maxDistance: 5000

  }
});

query.exec(function (err, items) {
  if (err) {
    console.log(err);
    throw err;
  }

  if (!items) {
    res.json({});
  } else {
    console.log('Cant save: Found city:' + items);
    res.json(items);
 }

});





 	// var test = new itemData({ 
 	// 	name: "test",
 	// 	description: "wtf",
 	// 	location: coords,
 	// 	category: "s"
 	// });
  //   test.save(function (err) {
  //   	console.log(err);
  // 	});

    // itemData.find({
    //   location: {
    //     $near: coords,//[longitude, latitude],
    //     $maxDistance: 5000
    //   }
    // })
    // .limit(limit)
    // .exec(function(err, locations) {
    // 	console.log(locations);
    //   if (err) {
    //     return res.json(500, err);
    //   }

    //   res.json(200, locations);
    // });




	// itemData.where('location').near({
	//     center: {
	//         type: 'Point',
	//         coordinates: [longitude, latitude]
	//     },
	//     maxDistance: 1000
	// });



    // var shortUrl = req.params.shortUrl;
    // urlService.getLongUrl(shortUrl, function (url) {
    //     if (url) {
    //         res.json(url);
    //     } else {
    //         res.status(404).send("wtf???");
    //     }
    // });
});

// router.get("/urls/:shortUrl/:info", function (req, res) {
//     statsService.getUrlInfo(req.params.shortUrl, req.params.info, function (data) {
//         res.json(data);
//     });
// });





module.exports = router;






