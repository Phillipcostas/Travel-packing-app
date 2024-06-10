const mongoose = require('mongoose');

itemSchema = new mongoose.Schema({
    name: {
    type: String,
    },
})


userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    suitcase: [itemSchema],
})






const User = mongoose.model('User', userSchema);
module.exports = User;
