const path = require('path');

const renderMW = require('../middleware/renderMW');

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
const editCommandMW = require('../middleware/commands/editCommandMW');

const GroupModel = require('../models/group');
const CommandModel = require('../models/command');

module.exports = function (app) {
    const objRepo = {
        GroupModel: GroupModel,
        CommandModel: CommandModel
    };

    app.use(
        '/login',
        checkPassMW(objRepo),
        renderMW(objRepo, 'login')
    );

    app.use(
        '/logout',
        logoutMW(objRepo)
    );

    app.get(
        '/',
        getAllGroupsMW(objRepo),
        renderMW(objRepo, 'list_groups')
    );

    app.use(
        '/group-create',
        checkLoggedinMW(objRepo),
        createGroupMW(objRepo),
        renderMW(objRepo, 'create_group')
    );

    app.use(
        '/group-edit/:groupname',
        checkLoggedinMW(objRepo),
        editGroupMW(objRepo),
        renderMW(objRepo, 'edit_group')
    );

    app.use(
        '/group-delete/:groupname',
        checkLoggedinMW(objRepo),
        deleteGroupMW(objRepo)
    );

    app.use(
        '/group/:groupname',
        listAllCommandsMW(objRepo),
        renderMW(objRepo, 'list_commands')
    );

    app.use(
        '/command/:commandname',
        getCommandMW(objRepo),
        renderMW(objRepo, 'detail_command')
    );

    app.use(
        '/:groupname/command-create',
        checkLoggedinMW(objRepo),
        createCommandMW(objRepo),
        renderMW(objRepo, 'create_command')
    );

    app.use(
        '/command-edit/:commandname',
        checkLoggedinMW(objRepo),
        editCommandMW(objRepo),
        renderMW(objRepo, 'edit_command')
    );

    app.use(
        '/command-delete/:commandname',
        checkLoggedinMW(objRepo),
        deleteCommandMW(objRepo)
    );
}