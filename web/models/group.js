const mongoose = require('mongoose');
const db = require('../config/db');

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon_link: { type: String },
    description: { type: String }
}, {
    collection: 'groups'
});

const Group = db.model('Group', GroupSchema);

module.exports = Group;
