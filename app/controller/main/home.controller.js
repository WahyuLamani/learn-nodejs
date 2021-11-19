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
        title: 'halaman Home',
        data: data
    });
}
