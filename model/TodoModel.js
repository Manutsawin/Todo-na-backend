const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    UserID: String,
    taskName: String,
    time: String,
    isFinished: { type: Boolean, default: false}, 
});

const TaskModel = mongoose.model("Task",taskSchema);

module.exports = TaskModel;

