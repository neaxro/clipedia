/**
 * Edits the command in database, after request if successfull user
 * will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        const dummy_command = {
            id: 6,
            name: "test",
            description: "Test command.",
            examples: [
                "grep 'pattern' file.txt",
                "ps aux | grep apache",
                "grep -i 'error' /var/log/syslog"
            ],
            links: [
                "https://man7.org/linux/man-pages/man1/grep.1.html"
            ],
            badges: [
                "Search Utilities",
                "File Permissions",
                "File Permissions",
                "File Permissions",
            ],
            group_id: 1 // Debian (text processing)
        };

        const commandName = req.body.command_name;
        const commandDescription = req.body.command_description;
        const commandExamples = req.body.examples || [];
        const commandLinks = req.body.links || [];

        console.log("[EDIT] Command Name:", commandName);
        console.log("[EDIT] Command Description:", commandDescription);
        console.log("[EDIT] Command Examples:", commandExamples);
        console.log("[EDIT] Command Links:", commandLinks);

        // If form is submitted and values are present, update the command
        if (commandName !== undefined && commandDescription !== undefined) {
            // Simulate updating the command with new values (e.g. save to DB)
            // Redirect to group after successful form submission
            return res.redirect('/group/debian');
        }

        // Pass the command and its attributes to the view
        res.locals.command = dummy_command;

        return next();
    };
};
