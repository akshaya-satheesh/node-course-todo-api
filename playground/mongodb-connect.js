//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'anu', age: 14};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected');

    //  db.collection('Todos').insertOne({
    //      text: 'Something',
    //      completed: false
    //  }, (err, result) => {
    //      if (err) {
    //          return console.log('Unable to insert', err);
    //      }

    //      console.log(JSON.stringify(result.ops, undefined, 2));
    //  });

    //  db.collection('Users').insertOne({
    //      name: 'Anu',
    //      age: 14,
    //      location: 'Kannur'
    //  }, (err, result) => {
    //      if (err) {
    //          return console.log('Unable to insert', err);
    //      }

    //      console.log(result.ops[0]._id.getTimestamp());
     //});

    db.close();
});