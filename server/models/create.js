var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var createSchema = new Schema({
    username: { type: String },
    name: { type: String, required: true },
    cpu: { type: String },
    mobo: { type: String },
    ram: { type: String },
    fan: { type: String },
    psu: { type: String },
    gpu: { type: String },
    sound: { type: String },
    case: { type: String },
    storage: { type: String }
},
    { collection: 'builds' }
);

// var partsSchema = new Schema({
//     type: { type: String },
//     brand: { type: String },
//     pn: { type: String },
//     socket: { type: String },
//     frequency: { type: String },
//     maxfreq: { type: String },
//     memory: { type: String }
// },
//     { collection: 'parts' }
// );

module.exports = mongoose.model('build', createSchema);