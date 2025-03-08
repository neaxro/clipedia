const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for delete current command.

        const commandName = req.params.commandname;

        console.log("[DELETE] Command: " + commandName);

        if(
            commandName !== undefined
        ){
            res.redirect('/group/debian');
        }

        return next();
    };
};
