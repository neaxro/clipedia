const path = require('path');

const checkLoggedinMW = require('../middleware/auth/checkLoggedinMW');
const checkPassMW = require('../middleware/auth/checkPassMW');
const logoutMW = require('../middleware/auth/logoutMW');

const getAllGroupsMW = require('../middleware/groups/getAllGroupsMW');
const createGroupMW = require('../middleware/groups/createGroupMW');
const editGroupMW = require('../middleware/groups/editGroupMW');
const deleteGroupMW = require('../middleware/groups/deleteGroupMW');

const listAllCommandsMW = require('../middleware/commands/listAllCommandsMW');
const getCommandMW = require('../middleware/commands/getCommandMW');
const createCommandMW = require('../middleware/commands/createCommandMW');
const deleteCommandMW = require('../middleware/commands/deleteCommandMW');

module.exports = function (app) {

    app.use(
        '/login',
        checkPassMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
        }
    );

    app.use(
        '/logout',
        logoutMW()
    );

    app.get(
        '/',
        getAllGroupsMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'list_groups.html'));
        }
    );

    app.use(
        '/group-create',
        checkLoggedinMW(),
        createGroupMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'create_group.html'));
        }
    );

    app.use(
        '/group-edit/:groupname',
        checkLoggedinMW(),
        editGroupMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'edit_group.html'));
        }
    );

    app.use(
        '/group-delete/:groupname',
        checkLoggedinMW(),
        deleteGroupMW()
    );

    app.use(
        '/group/:groupname',
        listAllCommandsMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'list_commands.html'));
        }
    );

    app.use(
        '/command/:commandname',
        getCommandMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'detail_command.html'));
        }
    );

    app.use(
        '/command-create',
        checkLoggedinMW(),
        createCommandMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'create_command.html'));
        }
    );

    app.use(
        '/command-edit',
        checkLoggedinMW(),
        createCommandMW(),
        (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'views', 'edit_command.html'));
        }
    );

    app.use(
        '/command-delete/:commandname',
        checkLoggedinMW(),
        deleteCommandMW()
    );
}