const config = require('../../config');
var MongoClient = require('mongodb').MongoClient;
                       
module.exports = {
  FindAll: function() {
    return MongoClient.connect(config.mognodb + config.mongodbCollection).then(function(db) {
      var collection = db.collection();
      
      return collection.find().toArray();
    }).then(function(items) {
      console.log(items);
      return items;
    });
  }
};
