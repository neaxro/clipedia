/**
 * From the form data creates a new group.
 * After creation is successfull user will be redirected to the main page.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for creating new group.

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
            return res.redirect('/');
        }

        return next();
    };
};
