const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;

const post = require('./data.json');

/**template using EJS */
app.set('view engine', 'ejs');
app.use(expressLayouts);
/* ~ */

app.use(express.static('public'));

require('./router/home.route')(app)


app.listen(port, () => {
    console.log(`app running port : http://localhost:${port}`);
});

