/* static Value */
const layout = 'layouts/main';
const bcrypt = require('bcrypt');

const db = require('../../model');

exports.home = (req, res) => {
    const data = {
        nama: "wahyu Lamani",
        umur: 21,
        alamat: 'bailang lingkungan 6',
        email: 'razorwahyu1@gmail.com'
    }
    // res.send(post)

    res.render('home', {
        layout,
        active: '',
        title: 'halaman Home',
        data: data
    });
}

exports.about = (req, res) => {
    res.render('about', {
        layout,
        active: 'about',
        title: 'About'
    })
}
exports.apps = (req, res) => {
    res.render('apps', {
        layout,
        active: 'apps',
        title: 'Apps'
    })
}
exports.register = (req, res) => {
    res.render('register', {
        layout,
        active: 'register',
        title: 'Register'
    })
}

exports.store = async (req, res, next) => {
    const data = req.body;
    if (data.password === data.repeatPassword) {
        bcrypt.hash(data.password, 10, function (err, hash) {
            db.user.create({
                name: req.body.name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                password: hash
            }).then(res.render('register', {
                layout,
                active: 'register',
                title: 'Register'
            }))
        });
    }



}
