//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name: 'Anu'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c9b733bb6612a122365f125')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();
});