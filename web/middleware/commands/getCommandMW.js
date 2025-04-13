/**
 * Gets the command's details for detailed view.
 */
const mongoose = require('mongoose');
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CommandModel = requireOption(objectrepository, 'CommandModel');

    return async function(req, res, next) {
        const commandName = req.params.commandname;
        console.log("Fetching command where name is " + commandName);

        try {
            const command = await CommandModel.findOne({ name: commandName }).lean();

            res.locals.command = command;
            return next();
        } catch (err) {
            return next(err);
        }
    };
};
