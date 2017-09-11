var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var createSchema = new Schema({
    username: {type: String},
    name: {type: String},
    cpu: {type: String},
    mobo: {type: String},
    ram: {type: String},
    fan: {type: String},
    psu: {type: String},
    gpu: {type: String},
    sound: {type: String},
    case: {type: String},
    storage: {type: String}
},
{collection: 'builds'}
);
module.exports = mongoose.model('build', createSchema);