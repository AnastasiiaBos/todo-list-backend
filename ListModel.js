const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ToDoList', listSchema);