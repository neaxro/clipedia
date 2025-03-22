/**
 * From the form data creates a new command.
 * After creation is successfull user will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for creating new command.

        const commandName = req.body.command_name;
        const commandDescription = req.body.command_description;

        console.log("[CREATE] Command Name:", commandName);
        console.log("[CREATE] Command Description:", commandDescription);

        if(
            commandName !== undefined
            && commandDescription !== undefined
        ) {
            res.redirect('/group/debian');
        }

        return next();
    };
};
