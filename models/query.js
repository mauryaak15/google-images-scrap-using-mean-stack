var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    term: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Term', schema);