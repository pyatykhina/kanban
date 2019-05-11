const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kanbanSchema = new Schema ({
    column: {
        type: String,
        required: true,
        unique: false
    },
    cards: {
        type: Array,
        unique: false
    }
})

mongoose.model('kanban', kanbanSchema); 