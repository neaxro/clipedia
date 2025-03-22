/**
 * Lists all commands within a group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for fecthing commands within group.

        const groupName = req.params.groupname;

        console.log("[LIST] Commands, group name is " + groupName);

        return next();
    };
};
