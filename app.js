const express = require('express');
const app = express();
const port = 3000;

/**template using EJS */



app.get('/', (req, res) => {
    res.send('Hello World');
});




app.listen(port, () => {
    console.log(`app running port : http://localhost:${port}`);
});

