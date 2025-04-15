/**
 * From the form data creates a new group.
 * After creation is successfull user will be redirected to the main page.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const GroupModel = requireOption(objectrepository, 'GroupModel');

    return async function(req, res, next) {
        const groupName = req.body.group_name;
        const groupImage = req.body.group_image_link;
        const groupDescription = req.body.group_description;

        console.log("[CREATE] Group Name:", groupName);
        console.log("[CREATE] Group Image Link:", groupImage);
        console.log("[CREATE] Group Description:", groupDescription);

        if(
            groupName !== undefined
            && groupImage !== undefined
            && groupDescription !== undefined
        ){
            try {
                const newGroup = GroupModel({
                    name: groupName,
                    icon_link: groupImage,
                    description: groupDescription
                });

                await newGroup.save();
                console.log("[CREATE] Group successfully created");

                return res.redirect('/');
            } catch (err) {
                console.error("[CREATE] Error creating group:", err);
                return next(err);
            }
        }

        return next();
    };
};
