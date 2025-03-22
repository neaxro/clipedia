# CLIpedia

Website that helps learn new, useful commands.

## Useful links

- [Subject home page](https://malna.tmit.bme.hu/vitmav42/)
- [Timeline](https://malna.tmit.bme.hu/vitmav42/Feladatok.md)
- [Homework submit page](https://malna.tmit.bme.hu/vitmav42/submit/)

# Views

- login.html: Login form (username, password).
- create_command.html: Command form for creation.
- create_group.html: Group form for creation.
- detail_command.html: Page thatshows a command's details (title, examples, sources, ...).
- edit_command.html: Command form for edit + delete button.
- edit_group.html: Group form for edit + delete button.
- list_commands.html: List that shows all commands within a group. By clicking on an element it routes to the command detail view. New command creation button.
- list_groups.html: Lists groups, by clicking on a group it will show all commands located in that group. New group cretion button.

# Routing documentation

middleware/auth/
    checkLoggedIn.js
    checkPassMW.js
    logout.js

middleware/commands/
    createCommandMW.js
    deleteCommandMW.js
    editCommandMW.js
    getCommandMW.js
    listAllCommandsMW.js

middleware/groups/
    createGroupMW.js
    deleteGroupMW.js
    editGroupMW.js
    getAllGroupsMW.js


GET /login
    checkPassMW
    show_page: login.html

GET /logout
    checkPassMW

GET  /                          Create new group button
    getAllGroupsMW
    show_page: list_groups.html

GET, POST  /group-create        POST: only if user logged in
    checkLoggedinMW
    createGroupMW
    show_page: create_group.html

GET, POST  /group-edit/:groupname        POST: only if user logged in, Edit and delete buttons
    checkLoggedinMW
    editGroupMW
    show_page: edit_group.html

POST  /group-delete/:groupname        POST: only if user logged in
    checkLoggedinMW
    deleteGroupMW

GET /group/:groupname       command create button, Create new command button
    listAllCommandsMW
    show_page: list_commands.html

GET /command/:commandname           Edit command button
    getCommandMW
    show_page: detail_command.html

GET, POST  /command-create        POST: only if user logged in
    checkLoggedinMW
    createCommandMW
    show_page: create_command.html

GET, POST  /command-edit        POST: only if user logged in, edit and delete button
    checkLoggedinMW
    createCommandMW
    show_page: edit_command.html

POST  /command-delete/:commandname        POST: only if user logged in
    checkLoggedinMW
    deleteCommandMW
