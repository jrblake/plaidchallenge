var db           = require('mongodb').db,
    MongoClient  = require('mongodb').MongoClient,
    assert       = require('assert'),
    perform      = require('./serialize_token'),
    options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };

//ssh -L 3306:127.0.0.1:27017 plaid@jblake-interview.plaid.com
MongoClient.connect('mongodb://127.0.0.1:3306/platform-interview', options, {native_parser:true}, function(err, db) {
    if(err) { return console.dir(err); }
    assert.equal(null, err);
    
    db.collection('clients', function(err, c_collection) { 
      c_collection.find({}).toArray(function(err, c_results){
        c_results.forEach(function(c_value){
          var client_id = c_value._id;
          db.collection('items', function(err, i_collection) {
            i_collection.find({_client:c_value._id}).toArray(function(err, i_results) {
               console.log(err);
               //Topography Destroyed ERR
              i_results.forEach(function(i_value){
                var item_id = i_value._client;
                //concatenate array to organize client_id, item_id, and institution_type
              });
              //serialize_token
            });
          });
        });
      });
    });
    db.close();
});


//could also potentially either do a $lookup or JOIN with Mongoose