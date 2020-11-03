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
    console.log("result >>>>", result)
    res.send(`${result.join('\n').replace(/,/g, ',')}`)
});

let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});

function arrayToCSV(data) {
    let csv = data.map(row => Object.values(row));
    let child = csv[0][csv[0].length - 1]
    csv[0].pop()
    console.log(">>>rec", child.length)
    if (Array.isArray(child) && child.length > 0) {
        for (let i = 0; i < child.length; i++) {
            let rec = []
            rec = arrayToCSV([child[i]])
            rec.shift()
            if (rec.length !== 0) {
                for (let i = 0; i < rec.length; i++) {
                    csv.push(rec[i])
                }
            }
        }
    }
    let keys = Object.keys(data[0])
    keys.pop()
    csv.unshift(keys);
    return csv;
}