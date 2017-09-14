var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partsSchema = new Schema({
    type: { type: String },
    brand: { type: String },
    pn: { type: String },
    socket: { type: String },
    frequency: { type: String },
    maxfreq: { type: String },
    memory: { type: String }
},
    { collection: 'parts' }
);

module.exports = mongoose.model('part', partsSchema);