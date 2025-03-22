const path = require('path');
const express = require('express');
const session = require('express-session');

var app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));    // For form data (application/x-www-form-urlencoded)
app.use(express.json());                            // For JSON data (if needed)

// Use static HTML files within views folder.
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/icons', express.static(__dirname + '/node_modules/bootstrap-icons/font'));
app.use('/prismjs', express.static(path.join(__dirname, 'node_modules/prismjs')));
app.use('/static', express.static('static'));
app.use(express.static('views'));

app.use(
    session({
        secret: 'secret'
    })
);

require('./routes/index.js')(app);

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});
