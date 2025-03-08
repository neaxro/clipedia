/**
 * Edits the command in database, after request if successfull user
 * will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for editing command.

        const commandName = req.body.command_name;
        const commandDescription = req.body.command_description;

        console.log("[EDIT] Command Name:", commandName);
        console.log("[EDIT] Command Description:", commandDescription);

        if(
            commandName !== undefined
            && commandDescription !== undefined
        ) {
            res.redirect('/group/debian');
        }

        return next();
    };
};
