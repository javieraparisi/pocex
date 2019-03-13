const express = require('express');
const fs = require('fs');
const ordenarLib = require('./ordenarLib');

const config = require("./config/config.json");
//const mockData = JSON.parse(fs.readFileSync('./mocks/data.json', 'latin1'));
const mockData = JSON.parse(fs.readFileSync('./mocks/data.json'));

let app = express();

app.get("/getUser", function (req, res) {
    allowCors(res);
    const user = mockData.user;
    res.json(user);
})

app.get("/getPortfolio", function (req, res) {
    var uuid = req.param('uuid');
    allowCors(res);
    const portfolio = mockData.portfolios.results.filter(portfolio => portfolio.uuid==uuid)[0];
    res.json(portfolio);
})

app.get("/getTransfers", function (req, res) {
    allowCors(res);
    const transfers = mockData.transfers.results;
    res.json(transfers);
})

let allowCors = (res)=> {
    res.setHeader('Access-Control-Allow-Origin', config.urlWebAllow);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
}

module.exports = app;
