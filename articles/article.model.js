const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	subject: { type: String, required: true },
	content: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ArticleModel', schema);
