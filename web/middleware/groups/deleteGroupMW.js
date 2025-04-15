/**
 * Deletes the group from database, after request if successful user
 * will be redirected to the command's group.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const GroupModel = requireOption(objectrepository, 'GroupModel');

    return async function(req, res, next) {
        const groupName = req.params.groupname;

        console.log("[DELETE] Group: " + groupName);

        try {
            if(
                groupName !== undefined
            ){
                res.redirect('/');
            }

            await GroupModel.deleteOne({ name: groupName });
            console.log("[DELETE] Group deleted with name: " + commandName);
        } catch (err) {
            return next(err);
        }

        return next();
    };
};
