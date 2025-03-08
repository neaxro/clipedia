const path = require('path');
const express = require('express');

var app = express();

app.use(express.urlencoded({ extended: true }));    // For form data (application/x-www-form-urlencoded)
app.use(express.json());                            // For JSON data (if needed)

// Use static HTML files within views folder.
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'));
app.use('/prismjs', express.static(path.join(__dirname, 'node_modules/prismjs')));
app.use('/static', express.static('static'));
app.use(express.static('views'));

// Login page
app.get('/login', function(req, res, next){
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Login page
// Process login data
app.post('/login', function(req, res, next){
    // TODO: handle login.
    const username = req.body.username;
    const password = req.body.password;

    console.log("[LOGIN] username:", username);
    console.log("[LOGIN] password:", password);
    console.log();

    res.redirect('/');
});

// Main page
// List groups.
app.get('/', function (req, res, next){
    console.log("[LIST] Groups");
    console.log();

    res.sendFile(path.join(__dirname, 'views', 'list_groups.html'));
});

// Get create group form.
app.get('/group', function (req, res, next){
    res.sendFile(path.join(__dirname, 'views', 'create_group.html'));
});

// Create new group from form's data.
app.post('/group', function (req, res, next){
    // TODO: handle group creation.
    const groupName = req.body.group_name;
    const groupImage = req.body.group_image_link;
    const groupDescription = req.body.group_description;

    console.log("[CREATE] Group Name:", groupName);
    console.log("[CREATE] Group Image Link:", groupImage);
    console.log("[CREATE] Group Description:", groupDescription);
    console.log();

    res.redirect('/');
});

// Get edit group form page.
app.get('/group-edit/:groupname', function (req, res, next){
    res.sendFile(path.join(__dirname, 'views', 'edit_group.html'));
});

// Edit group from form's data.
app.post('/group-edit/:groupname', function (req, res, next){
    // TODO: handle group update.
    const groupName = req.body.group_name;
    const groupImage = req.body.group_image_link;
    const groupDescription = req.body.group_description;

    console.log("[EDIT] Group Name:", groupName);
    console.log("[EDIT] Group Image Link:", groupImage);
    console.log("[EDIT] Group Description:", groupDescription);
    console.log();

    res.redirect('/');
});

// Delete group.
app.get('/group-delete/:groupname', function (req, res, next){
    console.log("[DELETE] Group: " + req.params.groupname);
    console.log();

    res.redirect('/');
});

// Commands within the selected group.
app.get('/group/:groupname', function(req, res, next){
    console.log("[LIST] Commands, group name is " + req.params.groupname);
    console.log();

    res.sendFile(path.join(__dirname, 'views', 'list_commands.html'));
});

// Get command.
app.get('/command/:commandname', function(req, res, next){
    console.log("[DETAIL] Command name is " + req.params.commandname);
    console.log();

    res.sendFile(path.join(__dirname, 'views', 'detail_command.html'));
});

// Get create command form.
app.get('/command', function(req, res, next){
    res.sendFile(path.join(__dirname, 'views', 'create_command.html'));
});

// Create command from form's data.
app.post('/command', function (req, res, next){
    // TODO: handle command creation.
    const commandName = req.body.command_name;
    const commandDescription = req.body.command_description;

    console.log("[CREATE] Command Name:", commandName);
    console.log("[CREATE] Command Description:", commandDescription);

    res.redirect('/group/debian');
});

// Get edit command form.
app.get('/command-edit/:commandname', function(req, res, next){
    res.sendFile(path.join(__dirname, 'views', 'edit_command.html'));
});

// Edit command from form's data.
app.post('/command-edit/:commandname', function(req, res, next){
    // TODO: handle command update.
    const commandName = req.body.command_name;
    const commandDescription = req.body.command_description;

    console.log("[EDIT] Command Name:", commandName);
    console.log("[EDIT] Command Description:", commandDescription);
    console.log();

    res.redirect('/group/debian');
});

// Delete command.
app.get('/command-delete/:commandname', function(req, res, next){
    console.log("[DELETE] Command: " + req.params.commandname);
    console.log();

    res.redirect('/group/debian');
});

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});
