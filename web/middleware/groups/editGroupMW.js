/**
 * Edits the group in database, after request if successfull user
 * will be redirected to the main page.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return async function(req, res, next) {
        const GroupModel = requireOption(objectrepository, 'GroupModel');

        try {
            const groupName = req.params.groupname;
            const group = await GroupModel.findOne({ name: groupName });

            res.locals.group = group;

            const groupNewName = req.body.group_name;
            const groupImage = req.body.group_image_link;
            const groupDescription = req.body.group_description;

            console.log("[EDIT] Group Name:", groupName);
            console.log("[EDIT] Group Image Link:", groupImage);
            console.log("[EDIT] Group Description:", groupDescription);

            if(
                groupName !== undefined
                && groupImage !== undefined
                && groupDescription !== undefined
            ){
                group.name = groupNewName;
                group.icon_link = groupImage;
                group.description = groupDescription;

                await group.save();
                console.log("[EDIT] Group successfully updated");

                return res.redirect('/');
            }
        } catch (err) {
            console.error("[EDIT] Error updating group:", err);
            return next(err);
        }

        return next();
    };
};
