'use strict';
var server = require('server');
var num = require('../scripts/Data').numero();

server.get('Show', function(req, res, next) {
    var viewData = res.getViewData();
    viewData.param1 = { numero: num };
    res.setViewData(viewData);
    res.render('/home/helloPage');
    next();
});

module.exports = server.exports();