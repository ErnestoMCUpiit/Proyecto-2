const express = require('express');
const TaskController = require('../controllers/TaskController');
const { route } = require('express/lib/router');

const router = express.Router();

router.get('/tasks', TaskController.option);
router.get('/create', TaskController.create);
router.post('/create', TaskController.store);
router.post('/tasks/delete', TaskController.destroy);
router.get('/tasks/edit/:id', TaskController.edit);
router.post('/tasks/edit/:id', TaskController.update);

module.exports = router;