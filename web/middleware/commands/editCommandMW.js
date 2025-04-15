/**
 * Edits the command in database, after request if successfull user
 * will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CommandModel = requireOption(objectrepository, 'CommandModel');

    return async function(req, res, next) {
        const commandName = req.params.commandname;
        console.log("[EDIT] Command Name:", commandName);

        try {
            const command = await CommandModel.findOne({ name: commandName });

            if (!command) {
                return next(new Error('Command not found: ' + commandName));
            }

            res.locals.command = command;

            const commandNewName = req.body.command_name;
            const commandDescription = req.body.command_description;
            const commandExamples = req.body.examples || [];
            const commandLinks = req.body.links || [];

            console.log("[EDIT] Command Description:", commandDescription);
            console.log("[EDIT] Command Examples:", commandExamples);
            console.log("[EDIT] Command Links:", commandLinks);

            // If form is submitted and values are present, update the command
            if (commandName !== undefined && commandDescription !== undefined) {
                command.name = commandNewName;
                command.description = commandDescription;
                command.examples = commandExamples;
                command.links = commandLinks;

                await command.save();
                console.log("[EDIT] Command successfully updated");

                return res.redirect('/');
            }
        } catch(err){
            console.error("[EDIT] Error updating command:", err);
            return next(err);
        }

        return next();
    };
};
