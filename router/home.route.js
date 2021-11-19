const HomeController = require('../app/controller/main/home.controller')
const Router = require('express').Router()

module.exports = (app) => {
    app.use('/', Router)
    Router.get('/', HomeController.Home);
}