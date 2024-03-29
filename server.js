
var express = require('express'); // node package
var app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

// function - to run server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});