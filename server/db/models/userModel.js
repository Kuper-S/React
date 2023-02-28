// This is the User model. It is used to create a new user in the database.
// It is also used to update the user in the database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema & model
const UserSchema = new Schema({
    username: {
        type: String,
    },
    score : {
        type: Number,

    },
    time: {
        value: {
            type: Number
        },
        unit: {
            type: String,
            enum: ['seconds', 'minutes', 'hours']
        }
    },

    avatar : {
        type: String,

    },  
    color : {
        type: String,
    },

});
UserSchema.set('timestamps', true);

const User = mongoose.model('user', UserSchema);

module.exports = User;

