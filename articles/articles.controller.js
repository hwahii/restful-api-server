const express = require('express');
const router = express.Router();
const articleService = require('./article.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
	articleService
		.create(req.body)
		.then(() => res.json({ data: 'Article post successfully' }))
		.catch(err => next(err));
}

function getAll(req, res, next) {
	articleService
		.getAll()
		.then(articles => res.json({ data: articles }))
		.catch(err => next(err));
}

function getById(req, res, next) {
	articleService
		.getById(req.params.id)
		.then(article =>
			article ? res.json({ data: article }) : res.sendStatus(404)
		)
		.catch(err => next(err));
}

function update(req, res, next) {
	articleService
		.update(req.params.id, req.body)
		.then(() => res.json({ data: 'Article update successfully' }))
		.catch(err => next(err));
}

function _delete(req, res, next) {
	articleService
		.delete(req.params.id)
		.then(() => res.json({ data: 'Article delete successfully' }))
		.catch(err => next(err));
}
