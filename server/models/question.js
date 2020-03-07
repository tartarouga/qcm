var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
    enonce: { type: String, required: true },
    reponse: { type: String, required: true },
    choix: [{ type: String }]

})
module.exports = mongoose.model('question', questionSchema);