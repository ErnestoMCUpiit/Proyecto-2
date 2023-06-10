const express = require('express');
const BookController = require('../controllers/BookController')
const { route } = require('express/lib/router')

const router = express.Router();

router.get('/libros', BookController.option);
router.get('/create', BookController.create);
router.post('/create', BookController.store);

module.exports = router;