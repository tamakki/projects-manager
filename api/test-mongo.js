const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

console.log("---- test connect mongodb servet ----");
const url = 'mongodb://test:pass@mongo:27017';
const db_name = 'example';
const collection_name = 'persons';

console.log(url);
console.log(db_name);
console.log(collection_name);

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

MongoClient.connect(url, option, (err, client) => {
  if (err !== undefined || client === null) {
    console.log('!! faild to connect mongo db server !!');
    console.log(err);
  } else {
    console.log(' @@ Connected sucessfully to server @@');
    const db = client.db(db_name);
    const rec = { 'name': 'tamaki', 'age': 12 }
    db.collection(collection_name).insertOne(rec, (err, res) => {
      if (err !== undefined) {
        console.log('err: insert');
        console.log(err);
        client.close();
      } else {
        console.log('succeeded: insert');
        db.collection(collection_name).find({}).toArray((err, result) => {
          if (err !== undefined) {
            console.log('err: select');
            console.log(err);
            client.close();
          } else {
            console.log('succeeded: select');
            console.log(result);
            client.close();
          }
        })
      }
    })
  }
})

console.log("-- excute end --");