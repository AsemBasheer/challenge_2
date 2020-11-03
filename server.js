const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./client'))
app.use(express.json())

app.post('/', function (req, res) {
    // console.log(req.body)
    let data = []
    data.push(req.body)
    let result = arrayToCSV(data)
    res.send(result)
});

let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});

function arrayToCSV(data) {
    let csv = data.map(row => Object.values(row));
    csv.unshift(Object.keys(data[0]));
    return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
}