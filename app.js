const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8000;

const { sqlize } = require('./app/config/db.config');

const dbConnect = async () => {
    try {
        await sqlize.authenticate()
        console.log('Database Connected !!');
    } catch (err) {
        console.log('connection Failed !', err);
    }
}

/**template using EJS */
app.set('view engine', 'ejs');
app.use(expressLayouts);
/* ~ */

app.use(express.static('public'));

require('./router/home.route')(app)


app.listen(port, () => {
    dbConnect()
    console.log(`app running port : http://localhost:${port}`);
});

