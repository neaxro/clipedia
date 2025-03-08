const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for fecthing command detail.

        const commandName = req.params.commandname;

        console.log("[DETAIL] Command name is " + commandName);

        return next();
    };
};
