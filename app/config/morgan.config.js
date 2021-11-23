const fs = require('fs');

module.exports = (app, morgan) => {
    app.use(morgan('short', {
        stream: fs.createWriteStream('./access.log', { flags: 'a' })
    }));
}

