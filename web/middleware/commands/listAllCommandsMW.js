const mongoose = require('mongoose');
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CommandModel = requireOption(objectrepository, 'CommandModel');
    const GroupModel = requireOption(objectrepository, 'GroupModel');

    return async function(req, res, next) {
        const groupName = req.params.groupname;
        console.log("Fetching all commands where group name is " + groupName);

        try {
            // Find the group by name
            const group = await GroupModel.findOne({ name: groupName }).lean();
            if (!group) {
                return next(new Error('Group not found: ' + groupName));
            }

            // Find commands that match the group_id
            const commands = await CommandModel.find({ group_id: group._id }).lean();

            res.locals.commands = commands;
            return next();
        } catch (err) {
            return next(err);
        }
    };
};
