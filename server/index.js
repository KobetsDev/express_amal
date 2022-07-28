const express = require('express')
const mongoose = require('mongoose');
const db = require('./db')
const app = express()
const port = 3000
var request = require('request');

const path = require('path')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
console.log(__dirname);
app.use('/static', express.static(path.join(__dirname, 'static')))

function name(params) {
    request.post({
        url: 'http://localhost/test2.php',
        body: "mes=heydude"
    }, function (error, response, body) {
        console.log(body);
    });
}

app.get('/', (req, res) => {
    console.log(mongoose.models)
    res.render('main.html', { title: 'Express' })
})

app.get('/payable/link', (req, res) => {

    console.log(mongoose.models)
    res.render('main.html', { title: 'Express' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})