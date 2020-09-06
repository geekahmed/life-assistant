const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    progress: {
        type: Number
    },
    milestones: [{
        type: Schema.Types.ObjectID,
        ref: 'Milestone'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);
