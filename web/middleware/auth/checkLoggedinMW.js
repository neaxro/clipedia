/**
 * If the user is authenticated, call next, otherwise redirect to /
 * By defualt the GET related requests can be done by anyone, other requests
 * granted if user is authenticated.
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.session.belepve === 'undefined' || req.session.belepve !== true) {
            return res.redirect('/');
        }

        next();
    };
};
