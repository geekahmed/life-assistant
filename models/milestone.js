const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MilestoneSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    finished:{
        type: Boolean,
        required: true,
        Default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Milestone', MilestoneSchema);
