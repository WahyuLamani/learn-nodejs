const fs = require('fs');

module.exports = (app, morgan) => {
    app.use(morgan('common', {
        stream: fs.createWriteStream('./access.log', { flags: 'a' })
    }));
}

