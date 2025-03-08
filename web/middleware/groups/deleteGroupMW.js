const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for delete current group.

        const groupName = req.params.groupname;

        console.log("[DELETE] Group: " + groupName);

        if(
            groupName !== undefined
        ){
            return res.redirect('/');
        }

        return next();
    };
};
