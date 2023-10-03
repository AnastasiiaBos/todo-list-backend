const { Router } = require('express');
const { getTask, postTask, deleteTask, editTask } = require('./ListController');
const router = Router();

router.get('/', getTask);
router.post('/saveTask', postTask);
router.post('/deleteTask', deleteTask);
router.put('/editTask', editTask);

module.exports = router;