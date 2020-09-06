const Task = require('../models/task');

exports.getAllTasks = (req, res, next) => {
    Task.find({})
        .populate('milestones')
        .then(tasks => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tasks);
        }, err => next(err))
        .catch(err => next(err));
};

exports.deleteAllTasks = (req, res, next) => {
    Task.remove({})
        .then(tasks => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tasks);
        }, err => next(err))
        .catch(err => next(err));
};

exports.addTask = (req, res, next) => {

    const requestBody = req.body ;
    const type = requestBody.type;

    if (type === 'timed'){
        // Add Normal Task without milestones
        Task.create(requestBody)
            .then((task) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(task);
            }, (err) => {next(err)}).catch((err) => {next(err)});

    } else if (type === 'progressive' && requestBody.milestones){

        // To be implemented

    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            error: 'Error in your request'
        });
    }
};

exports.deleteTaskById = (req, res, next) => {
    Task.findByIdAndRemove(req.params.taskId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
};

exports.getTaskById = (req, res, next) => {
    Task.findById(req.params.taskId)
        .then((task) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(task);
        }, (err) => next(err))
        .catch((err) => next(err));
};
