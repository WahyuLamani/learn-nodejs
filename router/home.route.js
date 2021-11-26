const HomeController = require('../app/controller/main/home.controller')
const Router = require('express').Router()

module.exports = (app) => {
    app.use('/', Router)
    Router.get('/', HomeController.home);
    Router.get('/about', HomeController.about);
    Router.get('/apps', HomeController.apps);
    Router.get('/register', HomeController.register);
    Router.post('/register', HomeController.store);
}