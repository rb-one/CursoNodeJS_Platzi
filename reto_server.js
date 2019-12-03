const express = require('express');
const app = express();
const { config } = require('./config/index');
const bodyParser = require("body-parser")
app.use(bodyParser.text({ type: 'text/plain' }));

const isLeap = (year) => (
    year % 4 === 0 ?
        `${year} es año bisesto` :
        `${year} no es año bisesto`
);

app.post('/yearchallenge', function (req, res) {
    let message = isLeap(req.body)
    res.send(message)
});

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`)
});
