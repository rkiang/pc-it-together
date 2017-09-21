var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var createSchema = new Schema({
    username: { type: String },
    name: { type: String, required: true },
    cpu: { 
        name: {type: String},
        socket: {type: String}
    },
    mobo: { 
        name: {type: String},
        socket: {type: String},
        memory: {type: String}
    },
    ram: { 
        name: {type: String},
        socket: {type: String}
    },
    fan: { 
        name: {type: String},
        socket: [{type: String}]
    },
    psu: { type: String },
    gpu: { type: String },
    sound: { type: String },
    case: { 
        name: {type: String},
        form: {type: String}
    },
    storage: { type: String },
    sharing: {type: Boolean}
},
    { collection: 'builds' }
);

module.exports = mongoose.model('build', createSchema);