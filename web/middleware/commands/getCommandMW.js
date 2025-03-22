/**
 * Gets the command's details for detailed view.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for fecthing command detail.

        const commandName = req.params.commandname;
        const dummy_command = {
            id: 1,
            name: "apt",
            description: "Package management command for installing, updating, and removing software.",
            examples: [
                "sudo apt update",
                "sudo apt install <package>",
                "sudo apt remove <package>"
            ],
            links: [
                "https://manpages.debian.org/buster/apt/apt.8.en.html"
            ],
            badges: ["Package Management"],
            group_id: 1 // Debian
        };

        res.locals.command = dummy_command;

        console.log("[DETAIL] Command name is " + commandName);

        return next();
    };
};
