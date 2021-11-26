const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 8001;
const { sqlize } = require('./app/config/database.config');
const morgan = require('morgan');


require('./app/config/morgan.config')(app, morgan);

//** connect to DB */
(async () => {
    try {
        await sqlize.authenticate()
        console.log('Database Connected !!');
    } catch (err) {
        console.log('connection Failed ! \n', err);
    }
})();

/** template using EJS */
app.set('view engine', 'ejs');
app.use(expressLayouts);

/** define public folder */
app.use(express.static('public'));

/** bodyParser */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**Route */
require('./router/home.route')(app)


app.listen(port, () => {
    console.log(`app running port : http://localhost:${port}`);
});

