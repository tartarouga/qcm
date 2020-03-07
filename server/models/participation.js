var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var participationSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    reponseUser: [{ type: String }],
    score: { type: Number },
})
module.exports = mongoose.model('participation', participationSchema);