const HomeController = require('../app/controller/main/home.controller')
const Router = require('express').Router()

module.exports = (app) => {
    app.use('/', Router)
    Router.get('/', HomeController.Home);
    Router.get('/about', HomeController.About);
    Router.get('/apps', HomeController.Apps);
    Router.get('/register', HomeController.Register);
}