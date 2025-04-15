/**
 * From the form data creates a new command.
 * After creation is successfull user will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CommandModel = requireOption(objectrepository, 'CommandModel');
    const GroupModel = requireOption(objectrepository, 'GroupModel');

    return async function(req, res, next) {
        // Retrieve the command data from the request body
        const groupName = req.params.groupname;
        const commandName = req.body.command_name;
        const commandDescription = req.body.command_description;

        console.log("[CREATE] Group Name:", groupName);
        console.log("[CREATE] Command Name:", commandName);
        console.log("[CREATE] Command Description:", commandDescription);

        // Validate the input
        if (
            commandName !== undefined &&
            commandDescription !== undefined &&
            groupName !== undefined
        ) {
            try {
                // Fetch the group by name to get its ObjectId
                const group = await GroupModel.findOne({ name: groupName });

                if (!group) {
                    console.log("[CREATE] Group not found");
                    return res.status(404).send("Group not found");
                }

                console.log(group);

                // Create the new command object
                const newCommand = CommandModel({
                    name: commandName,
                    description: commandDescription,
                    examples: req.body.examples || [],
                    links: req.body.links || [],
                    badges: req.body.badges || [],
                    group_id: group._id
                });

                // Save the new command to the database
                await newCommand.save();

                console.log("[CREATE] Command successfully created");

                // Redirect the user to the group page after creation
                return res.redirect(`/group/${groupName}`);
            } catch (err) {
                console.error("[CREATE] Error creating command:", err);
                return next(err);
            }
        } else {
            console.log("[CREATE] Invalid data");
            return next();
        }
    };
};
