const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

/**template using EJS */
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.get('/', (req, res) => {
    const data = {
        nama: "wahyu Lamani",
        umur: 21,
        alamat: 'bailang lingkungan 6',
        email: 'razorwahyu1@gmail.com'
    }
    // console.log(data);

    res.render('home', {
        title: 'halaman Home',
        layout: 'layouts/core',
        data: data
    });
});




app.listen(port, () => {
    console.log(`app running port : http://localhost:${port}`);
});

