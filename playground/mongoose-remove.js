const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5c9d8529b6612a1223665b56'}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5c9d85c9b6612a1223665c0b').then((todo) => {
    console.log(todo);
});