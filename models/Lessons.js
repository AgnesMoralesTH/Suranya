const mongoose = require('mongoose');

const LessonSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String, 
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('lesson', LessonSchema);