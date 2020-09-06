const express = require('express');
const taskController = require('../controllers/taskController');
const taskRouter = express.Router();

taskRouter.route('/')
    .get( taskController.getAllTasks)
    .post(taskController.addTask)
    .delete(taskController.deleteAllTasks)
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /tasks');
    });

taskRouter.route('/:taskId')
    .get(taskController.getTaskById)
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /tasks/' + req.params.taskId);
    })
    .delete(taskController.deleteTaskById)
    .put((req, res) => {
        res.send('Hello Haha')
    });



module.exports = taskRouter;
