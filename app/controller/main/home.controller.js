/* static Value */
const layout = 'layouts/main';
/* ~ */


exports.Home = (req, res) => {
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

exports.About = (req, res) => {
    res.render('about', {
        layout,
        active: 'about',
        title: 'About'
    })
}
exports.Apps = (req, res) => {
    res.render('apps', {
        layout,
        active: 'apps',
        title: 'Apps'
    })
}
exports.Register = (req, res) => {
    res.render('register', {
        layout,
        active: 'register',
        title: 'Register'
    })
}
