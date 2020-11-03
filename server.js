const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./client'))
app.use(express.json())

app.post('/', function (req, res) {
    console.log(req.body)

    res.send(">>csv>>")
});

let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});

function arrayToCSV(data) {
    csv = Object.values(data)
    console.log("csv", csv)
    console.log("keys 0", Object.keys(data[0]))
    csv.unshift(Object.keys(data[0]));
    return `"${csv.join('"\n"').replace(/,/g, '","')}"`;
}