const mongoose = require('mongoose');
const db = require('../config/db');

const CommandSchema = new mongoose.Schema({
    examples: [{ type: String }],
    links: [{ type: String }],
    badges: [{ type: String }],
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    }
}, {
    collection: 'commands'
});

const Command = db.model('Command', CommandSchema);

module.exports = Command;
