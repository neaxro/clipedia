/**
 * Lists all groups from database.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const GroupModel = requireOption(objectrepository, 'GroupModel');

    return async function(req, res, next) {
        console.log('Fetching all groups from database...');

        try {
            const groups = await GroupModel.find({}).lean();
            res.locals.groups = groups;
            return next();

        } catch (err) {
            return next(err);
        }
    };
};
