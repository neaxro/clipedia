const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for listing all groups.
        console.log('Fetching all groups from database...');
        return next();
    };
};
