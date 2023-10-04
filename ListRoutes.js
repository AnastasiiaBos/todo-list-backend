const { Router } = require('express');
const { getTask, postTask, deleteTask, editTask, removeAllTasks } = require('./ListController');
const router = Router();

router.get('/', getTask);
router.get('/removeTasks', removeAllTasks);
router.post('/saveTask', postTask);
router.post('/deleteTask', deleteTask);
router.put('/editTask', editTask);

module.exports = router;