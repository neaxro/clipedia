const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for edit current group.

        const groupName = req.body.group_name;
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
            return res.redirect('/');
        }

        return next();
    };
};
