var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/test';

client.connect(url, function (err, db) {
  if (err) {
    console.log('No connect-o: ' + err);
  } else {
    console.log('All gravy: ' + url);

    // do stuff...
    var artist = {name: 'Kaskade', genre: 'EDM'};
    var collection = db.collection('artists');
    collection.insert(artist, function (err, result)  {
      if (err) {
        console.log('error: ' + err);
      } else {
        console.log('Inserted record');
      }
    });

    db.close();
  }
});
