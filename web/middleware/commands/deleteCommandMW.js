/**
 * Deletes the command from database, after request if successful user
 * will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CommandModel = requireOption(objectrepository, 'CommandModel');

    return async function(req, res, next) {
        const commandName = req.params.commandname;

        try {
            if(
                commandName !== undefined
            ){
                res.redirect('/');
            }

            await CommandModel.deleteOne({ name: commandName });
            console.log("[DELETE] Command deleted with name: " + commandName);
        } catch (err) {
            return next(err);
        }

        return next();
    };
};
