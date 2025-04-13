/**
 * Lists all commands within a group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for fecthing commands within group.
        const dummy_commands = [
            {
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
            },
            {
                id: 2,
                name: "systemctl",
                description: "Command to control system services (start, stop, restart, check status).",
                examples: [
                    "sudo systemctl start <service>",
                    "sudo systemctl stop <service>",
                    "sudo systemctl restart <service>",
                    "systemctl status <service>"
                ],
                links: [
                    "https://man7.org/linux/man-pages/man1/systemctl.1.html"
                ],
                badges: ["System Service"],
                group_id: 1 // Debian (system utilities)
            },
            {
                id: 3,
                name: "journalctl",
                description: "View and query system logs from the systemd journal.",
                examples: [
                    "journalctl -xe",
                    "journalctl -u <service>",
                    "journalctl --since '1 hour ago'"
                ],
                links: [
                    "https://man7.org/linux/man-pages/man1/journalctl.1.html"
                ],
                badges: ["System Logs"],
                group_id: 1 // Debian (system utilities)
            },
            {
                id: 4,
                name: "chmod",
                description: "Change file permissions for users and groups.",
                examples: [
                    "chmod 755 <file>",
                    "chmod u+x <script.sh>",
                    "chmod -R 644 <directory>"
                ],
                links: [
                    "https://man7.org/linux/man-pages/man1/chmod.1.html"
                ],
                badges: ["File Permissions"],
                group_id: 1 // Debian (file utilities)
            },
            {
                id: 5,
                name: "grep",
                description: "Search for text patterns in files and outputs.",
                examples: [
                    "grep 'pattern' file.txt",
                    "ps aux | grep apache",
                    "grep -i 'error' /var/log/syslog"
                ],
                links: [
                    "https://man7.org/linux/man-pages/man1/grep.1.html"
                ],
                badges: ["Search Utilities"],
                group_id: 1 // Debian (text processing)
            },
            {
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
            }
        ];

        res.locals.commands = dummy_commands;

        const groupName = req.params.groupname;

        console.log("[LIST] Commands, group name is " + groupName);

        return next();
    };
};
