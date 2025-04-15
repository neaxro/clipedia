const mongoose = require('mongoose');

mongoose.connect('mongodb://root:pass@mongodb:27017/clipedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin"
});

module.exports = mongoose;
