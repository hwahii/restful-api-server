const db = require('../_helpers/db');
const Article = db.ArticleModel;

module.exports = {
	getAll,
	getById,
	create,
	update,
	delete: _delete
};

async function getAll() {
	return await Article.find();
}

async function getById(id) {
	return await Article.findById(id);
}

async function create(articleParam) {
	const article = new Article(articleParam);
	// save article
	await article.save();
}

async function update(id, articleParam) {
	const article = await Article.findById(id);

	// validate
	if (!article) throw 'Article not found';

	// copy articleParam properties to article
	Object.assign(article, articleParam);

	await article.save();
}

async function _delete(id) {
	await Article.findByIdAndRemove(id);
}
