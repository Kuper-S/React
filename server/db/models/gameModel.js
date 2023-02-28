//  This is the Game model. It is used to create a new game in the database.
//  It is also used to update the game in the database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create game schema & model
const GameSchema = new Schema({
    question: {
        type: Array,
        required: [true, 'Question field is required']

    },
    answer: {
        type: Array,
        required: [true, 'Answer field is required']
    },
    image: {
        type: String,

    },
    category: {
        type: String,
    },
    difficulty: {
        type: String,
    },
    link: {
        type: String,
    },
    hint: {
        type: String,
    },
    createdAt : {

    },
    }   
);

GameSchema.set('timestamps', true);


const Game = mongoose.model('game', GameSchema);

module.exports = Game;