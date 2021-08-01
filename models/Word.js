const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lesson'
    },
    word: {
        type: String,
        required: true
    }
})

