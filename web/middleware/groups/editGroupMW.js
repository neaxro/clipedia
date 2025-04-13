/**
 * Edits the group in database, after request if successfull user
 * will be redirected to the main page.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        // TODO: Implement db call for edit current group.

        const dummy_group = {
            id: 1,
            name: "Debian",
            icon_link: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fdebian-logo.png&f=1&nofb=1&ipt=db3be22e58478195b6993d1eed38b6d6c4f86deb9aeee0c921fda82734a97156&ipo=images",
            description: "A popular and stable Linux distribution known for its robustness and extensive package ecosystem."
        };

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

        res.locals.group = dummy_group;

        return next();
    };
};
