/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /
 * if the password is wrong, pass down a 'error' key on res.locals to indicate error
 */
const requireOption = require('../requireOption');
const secretPassword = 'pass';

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === secretPassword) {
            req.session.belepve = true;
            console.log("login success!!!");
            return req.session.save(err => res.redirect('/'));
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};
