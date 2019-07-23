var mongoose = require('mongoose');

var HeroSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Heroes', HeroSchema);