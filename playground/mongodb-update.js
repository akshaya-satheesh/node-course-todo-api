//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c9b707eb6612a122365efc8')
    // }, {
    //     $set:{
    //         completed:true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c9b63825315bd2854a0d34e')
    }, {
        $set: {
            name: 'Akshaya'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});