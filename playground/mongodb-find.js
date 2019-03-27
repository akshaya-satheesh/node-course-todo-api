//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c9b66e8b6612a122365ece9')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    //     //console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({name: 'Anu'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });

    //db.close();
});